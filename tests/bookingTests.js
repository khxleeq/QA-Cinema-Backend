
const chai = require('chai');
const chaiHTTP = require('chai-http');
const { describe, it, beforeEach } = require('mocha');
const server = require('../server.js');

chai.use(chaiHTTP);
const { expect } = require('chai');
const booking = require('../models/bookingModel');


describe('crud testing', () => {
    let testBooking;

    beforeEach(async () => {
        try {
            await booking.deleteMany({});
            testBooking = await booking.create({
                title: 'Movie Test',
                date: '08/09/2022',
                time: '12:00',
                seats: 3,
                ticketType: "Adult",
                name: 'John'
            });
            testBooking = JSON.parse(JSON.stringify(testBooking));
        } catch (err) {
            console.log(err);
        }
    });

    //create
    it('should create booking submission', (done) => {
        const newBooking = {
            title: 'Movie Test 1',
            date: '18/09/2022',
            time: '15:00',
            seats: 1,
            ticketType: "Child",
            name: 'Jack'
        };

        chai.request(server).post('/api/booking').send(newBooking)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(201);
                expect(res.body).to.deep.include(newBooking);

                return done();
            });
    });

    //read
    it('should read all bookings', (done) => {
        chai.request(server).get('/api/booking')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);

                return done();
            });
    });

    it('should get a specific booking', (done) => {
        chai.request(server).get(`/api/booking/${testBooking._id}`)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.include(testBooking);

                return done();
            });
    });

    //update
    it('should update a booking', (done) => {
        chai.request(server).put(`/api/booking/${testBooking._id}`).query({name: 'Khaleeq'})
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.include(testBooking);

                return done();
            });
    });

    //deletion
    it('should delete a booking', (done) => {
        chai.request(server).delete(`/api/booking/${testBooking._id}`)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(204);

                return done();
            });
    });
});
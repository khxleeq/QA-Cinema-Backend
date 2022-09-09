const { describe, it, beforeEach } = require('mocha');
const chai = require('chai');
const chaitHttp = require('chai-http');
chai.use(chaitHttp);
const { expect } = chai;
const movie = require('../models/movieModel');
const server = require('../test-server.js');


describe('CRUD Tests', () => {
    let testMovie;

    beforeEach(async () => {
        try {
            await movie.deleteMany({});
            testMovie = await movie.create({
              fullTitle: "Movie Title Test",
              poster: "image",
              actors: "Actors test",
              directors: "Directors test",
              classification: "18",
              showtimes: "1PM, 3PM",
              dateReleased: "27/03/2022",
              ratings: 0,
              description: "Test description",
              genre: "Action",
            });
            testMovie = JSON.parse(JSON.stringify(testMovie)); 
        } catch (err) {
            console.log(err);
        }
    });

    // Create
    it('Should create movie', (done) => {
        const newMovie = {
          fullTitle: "New Movie Title Test",
          poster: "image",
          actors: "Actors test ",
          directors: "Directors test 1",
          classification: "U",
          showtimes: "1PM, 3PM 8PM",
          dateReleased: "30/11/2011",
          ratings: 0,
          description: "Test description 1",
          genre: "Adventure",
        };

        chai.request(server).post('/api/movies').send(newMovie)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(201);
                expect(res.body).to.deep.include(newMovie);

                return done();
            });
    });

    // Read
    it('Should get all movies', (done) => {
        chai.request(server).get('/api/movies')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);

                return done();
            });
    });

    it('Should get movie', (done) => {
        chai.request(server).get(`/api/movies/${testMovie._id}`)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.include(testMovie);

                return done();
            });
    });

    // Update 
    it('Should update movie', (done) => {
        chai.request(server).put(`/api/movies/${testMovie._id}`).query({ name: 'Jim' })
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(res.body).to.deep.include(testMovie);

                return done();
            });
    });

    // Delete
    it('Should delete movie', (done) => {
        chai.request(server).delete(`/api/movies/${testMovie._id}`)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.status).to.equal(204);
                
                return done();
            });
    });
});
class Cinema {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.movies = [];

    }

    intro() {
        console.log(`Welcome to "${this.name}" cinema theater!`);
    }

    addMovie(movieName, moviePrice, ticketPrice) {
        this.movies.push({
            movieName: movieName,
            moviePrice: moviePrice,
            ticketPrice: ticketPrice,
            profit: 0,
            available: true
        })
        // console.log(this.movies);
        console.log(`You can watch "${movieName}" movie for ${ticketPrice} EUR, now!`);
    }


    sellTickets(movieIndex, ticketsCount) {
        if (this.movies[movieIndex].available === true) {
            this.movies[movieIndex].profit += this.movies[movieIndex].ticketPrice * ticketsCount;
        }
        else {
            console.log(`Sorry, you can no longer buy tickets to movie "${this.movies[movieIndex].movieName}".`);
        }
    }

    profit() {
        console.log(`===============`);
        console.log(`"${this.name}" profit:`);
        console.log(`===============`);
        for (let i = 0; i < this.movies.length; i++) {
            console.log(`${[i + 1]}. "${this.movies[i].movieName}":`);
            console.log(`paid: ${this.movies[i].moviePrice} EUR;`);
            console.log(`profit: ${this.movies[i].profit} EUR;`);
            console.log(`net profit: ${this.movies[i].profit - this.movies[i].moviePrice} EUR;`);
        }
        console.log(`===============`);
    }

    updateMoviePrice(index, ticketPrice) {
        this.movies[index].ticketPrice = ticketPrice;
        console.log(`You can watch "${this.movies[index].movieName}" movie for ${ticketPrice} EUR, now!`);
    }

    removeMovie(index) {
        this.movies[index].available = false;
        console.log(this.movies);
        console.log(`No more "${this.movies[index].movieName} " :(`);
    }


}

module.exports = Cinema;
import React, { useState } from "react";
import "./styles.css";

const moviesDictionary = {
  action: [
    {
      name: "Die Hard (1988)",
      ratings: "4/5",
      summary:
        "Die Hard follows New York City police detective John McClane who is caught up in a terrorist takeover of a Los Angeles skyscraper while visiting his estranged wife. "
    },
    {
      name: "Commando (1985)",
      ratings: "4/5",
      summary:
        "Retired United States Special Forces Colonel John Matrix is informed by his former superior Major General Franklin Kirby that all the other members of his former unit have been killed by unknown mercenaries. "
    },
    {
      name: "Mission Impossible 2",
      ratings: "4/5",
      summary:
        " Tom Cruise returns to his role as Ethan Hunt in the second installment of Mission: Impossible. This time Ethan Hunt leads his IMF team on a mission to capture a deadly German virus before it is released by terrorists. His mission is made impossible due to the fact that he is not the only person after samples of the disease. He must also contest with a gang of international terrorists headed by a turned bad former IMF agent who has already managed to steal the cure."
    }
  ],
  fantasy: [
    {
      name: "The Lord Of The Rings Trilogy",
      ratings: "4.5/5",
      summary:
        "The culmination of nearly 10 years' work and conclusion to Peter Jackson's epic trilogy based on the timeless J.R.R. Tolkien classic, The Lord of the Rings: The Return of the King presents the final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits Frodo and Sam reach Mordor in their quest to destroy the `one ring', while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith. "
    },
    {
      name: "The Hobbit Trilogy",
      ratings: "4/5",
      summary:
        " WBilbo Baggins (Martin Freeman) lives a simple life with his fellow hobbits in the shire, until the wizard Gandalf (Ian McKellen) arrives and convinces him to join a group of dwarves on a quest to reclaim the kingdom of Erebor. The journey takes Bilbo on a path through treacherous lands swarming with orcs, goblins and other dangers, not the least of which is an encounter with Gollum (Andy Serkis) and a simple gold ring that is tied to the fate of Middle Earth in ways Bilbo cannot even fathom."
    },
    {
      name: "Troy (2004)",
      ratings: "4/5",
      summary:
        " Based on Homer's Iliad,this epic portrays the battle between the ancient kingdoms of Troy and Sparta. While visiting Spartan King Menelaus (Brendan Gleeson), Trojan prince Paris (Orlando Bloom) falls for Menelaus' wife, Helen (Diane Kruger), and takes her back to Troy. Menelaus' brother, King Agamemnon (Brian Cox), having already defeated every army in Greece, uses his brother's fury as a pretext to declare war against Troy, the last kingdom preventing his control over the Aegean Sea."
    }
  ],
  animation: [
    {
      name: "Kung Fu Panda Trilogy",
      ratings: "4/5",
      summary:
        "Po might just be the laziest, clumsiest panda in the Valley of Peace, but he secretly dreams of becoming a kung fu legend. When the villainous snow leopard Tai Lung threatens Po's homeland, the hapless panda is chosen to fulfil an ancient prophecy and defend the Valley from attack. Training under Master Shifu, Po embarks on an epic high-kicking adventure as he sets out to thwart Tai Lung's evil plans. A DreamWorks animation."
    },
    {
      name: "Finding Nemo (2003)",
      ratings: "4.5/5",
      summary:
        " Marlin (Albert Brooks), a clown fish, is overly cautious with his son, Nemo (Alexander Gould), who has a foreshortened fin. When Nemo swims too close to the surface to prove himself, he is caught by a diver, and horrified Marlin must set out to find him. A blue reef fish named Dory (Ellen DeGeneres) -- who has a really short memory -- joins Marlin and complicates the encounters with sharks, jellyfish, and a host of ocean dangers. Meanwhile, Nemo plots his escape from a dentist fish tank."
    },
    {
      name: "Toy Story Series",
      ratings: "4.5/5",
      summary:
        " The plot involves Andy (voiced by John Morris), an imaginative young boy, getting a new Buzz Lightyear (Tim Allen) action figure for his birthday, causing Sheriff Woody (Tom Hanks), a vintage cowboy doll, to think that he has been replaced as Andy's favorite toy."
    }
  ],
  biography: [
    {
      name: "A Beautiful Mind (2001)",
      ratings: "4.5/5",
      summary:
        "A human drama inspired by events in the life of John Forbes Nash Jr., and in part based on the biography A Beautiful Mind by Sylvia Nasar. From the heights of notoriety to the depths of depravity, John Forbes Nash Jr. experienced it all. A mathematical genius, he made an astonishing discovery early in his career and stood on the brink of international acclaim. But the handsome and arrogant Nash soon found himself on a painful and harrowing journey of self-discovery."
    },
    {
      name: "The Social Network (2010)",
      ratings: "4.5/5",
      summary:
        "In 2003, Harvard undergrad and computer genius Mark Zuckerberg (Jesse Eisenberg) begins work on a new concept that eventually turns into the global social network known as Facebook. Six years later, he is one of the youngest billionaires ever, but Zuckerberg finds that his unprecedented success leads to both personal and legal complications when he ends up on the receiving end of two lawsuits, one involving his former friend (Andrew Garfield). Based on the book The Accidental Billionaires."
    },
    {
      name: "Moneyball (2011)",
      ratings: "4.5/5",
      summary:
        "Billy Beane (Brad Pitt), general manager of the Oakland A's, one day has an epiphany: Baseball's conventional wisdom is all wrong. Faced with a tight budget, Beane must reinvent his team by outsmarting the richer ball clubs. Joining forces with Ivy League graduate Peter Brand (Jonah Hill), Beane prepares to challenge old-school traditions. He recruits bargain-bin players whom the scouts have labeled as flawed, but have game-winning potential. Based on the book by Michael Lewis."
    }
  ],
  crime: [
    {
      name: "The Godfather Trilogy",
      ratings: "4.5/5",
      summary:
        "TWidely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don's youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business."
    },
    {
      name: "The Departed (2006)",
      ratings: "4/5",
      summary:
        "South Boston cop Billy Costigan (Leonardo DiCaprio) goes under cover to infiltrate the organization of gangland chief Frank Costello (Jack Nicholson). As Billy gains the mobster's trust, a career criminal named Colin Sullivan (Matt Damon) infiltrates the police department and reports on its activities to his syndicate bosses. When both organizations learn they have a mole in their midst, Billy and Colin must figure out each other's identities to save their own lives."
    },
    {
      name: "Serpico(1973)",
      ratings: "4/5",
      summary:
        "Frank Serpico (Al Pacino) is an idealistic New York City cop who refuses to take bribes, unlike the rest of the force. His actions get Frank shunned by the other officers, and often placed in dangerous situations by his partners. When his superiors ignore Frank's accusations of corruption, he decides to go public with the allegations. Although this causes the Knapp Commission to investigate his claims, Frank has also placed a target on himself. The film is based on a true story."
    }
  ]
};

const genres = Object.keys(moviesDictionary);

export default function App() {
  const [genre, setGenre] = useState("");
  const [movies, setmovies] = useState([]);
  function genreClickHandler(genre) {
    setGenre(genre);
    setmovies(moviesDictionary[genre.toLowerCase()]);
  }

  function inputChangeHandler(event) {
    setGenre(event.target.value);
  }
  return (
    <div className="App">
      <h1>Movie Recommender</h1>
      <div className="Form-div">
        <input
          placeholder="Type any genre...."
          onChange={inputChangeHandler}
          value={genre}
          className="App-form App-input"
        />
        <button
          className="App-form  App-btn"
          onClick={() => genreClickHandler(genre)}
        >
          Search
        </button>
      </div>
      <p>Checkout some of the great Movies in each genre!</p>

      {genres.map((genre) => {
        return (
          <button
            className="genre-item"
            onClick={() => genreClickHandler(genre)}
            key={genre}
          >
            {genre}
          </button>
        );
      })}

      {movies ? (
        movies.map((movie, index) => {
          return (
            <div key={index} className="App-movie">
              <h2>{movie.name}</h2>
              <small>
                <strong> Ratings : </strong>
                {movie.ratings}
              </small>
              <p>
                <strong> Summary : </strong>
                {movie.summary}
              </p>
            </div>
          );
        })
      ) : (
        <p>Your search does not have any results</p>
      )}
    </div>
  );
}

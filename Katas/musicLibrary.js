// We'll be implementing a program that manages music playlists using objects and arrays.

// The program will consist of:

// An object, the library, that will store all the information about tracks and playlists
// A collection of functions that will perform certain operations on the library, for example addPlaylist
// The library object is structured like this:

const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};


const printPlaylists = (library) => {
  for(let playlist in library.playlists){
    console.log("playlist:",library.playlists[playlist]);
  }
};
const printTracks = (library) => {
  for(let playlist in library.playlists) {
    console.log("Tracks:",library.playlists[playlist].tracks)
  }
};

printPlaylists(library);
printTracks(library);



// We will need to implement the following functions:

// printPlaylists
// printTracks
// printPlaylist
// addTrackToPlaylist
// addTrack
// addPlaylist
// printSearchResults (stretch)

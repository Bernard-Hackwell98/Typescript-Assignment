// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist: string, title: string, tracks: number = 0): any{
    const album_things = {
        artist_name : artist,
        title_name : title,
        NumberOfTracks : tracks > 0 ? tracks : "No record found",
    }
    return album_things
}
const Album1 = make_album("The Weeknd", "Starboy");
const Album2 = make_album("Justin Bieber", "Purpose", 19);

console.log(Album1);
console.log(Album2);
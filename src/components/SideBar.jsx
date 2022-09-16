import Logo from "../assets/Spotify_Logo.png";

const SideBar = () => {
  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

  const search = async () => {
    let div = document.querySelector("#searchResults .row");
    div.innerHTML = "";
    let searchQuery = document.querySelector("#searchField").value; // gets the value from the search box

    if (searchQuery.length > 2) {
      //if there's a value in the search box => fetch the information from rapidapi & display the result
      document.querySelector("#searchResults").style.display = "block";

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            searchQuery,
          {
            method: "GET",
            headers,
          }
        ); // gets the information

        if (response.ok) {
          let result = await response.json(); // transforms the response to json
          //let songs = result.data; // gets the songs info

          for (let x = 0; x < result.data.length; x++) {
            div.innerHTML += albumCard(result.data[x]);
          }
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      //else just hide the section!
      document.querySelector("#searchResults").style.display = "none";
    }
  };

  function albumCard(songInfo) {
    // songInfo represents the info for the current song
    // creating the wrapper div
    return `
          <div className="col text-center" id=${songInfo.id}>
            <a href="/albumPage?id=${songInfo.album.id}">
              <img className="img-fluid" src=${
                songInfo.album.cover_medium
              } alt="1" />
            </a>
            <p>
              <a href="/albumPage?id=${songInfo.album.id}">
                Album: "${
                  songInfo.album.title.length < 16
                    ? `${songInfo.album.title}`
                    : `${songInfo.album.title.substring(0, 16)}...`
                }"<br>
              </a>
              <a href="/artist_page.html?id=${songInfo.artist.id}">
                Artist: ${songInfo.artist.name}
              </a>
            </p>
          </div>`;
  }

  return (
    <div className='col-2'>
      <nav
        className='navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between'
        id='sidebar'
      >
        <div className='nav-container'>
          <a className='navbar-brand' href='/'>
            <img src={Logo} alt='Spotify_Logo' width='131' height='40' />
          </a>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <ul>
                <li>
                  <a className='nav-item nav-link' href='/'>
                    <i class='bi bi-house-door'></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className='nav-item nav-link' href='/'>
                    <i class='bi bi-book'></i>&nbsp; Your Library
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='input-group mt-3'>
            <input
              type='text'
              className='form-control mb-2'
              id='searchField'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='basic-addon2'
            />
            <div className='input-group-append' style={{ marginBottom: "4%" }}>
              <button
                className='btn btn-outline-secondary btn-sm'
                type='button'
                id='button-addon1'
                onClick={search}
              >
                GO
              </button>
            </div>
          </div>
        </div>
        <div className='nav-btn'>
          <button className='btn signup-btn' type='button'>
            Sign Up
          </button>
          <button className='btn login-btn' type='button'>
            Login
          </button>
          <a href='/'>Cookie Policy</a> |<a href='/'> Privacy</a>
        </div>
      </nav>
    </div>
  );
};
export default SideBar;

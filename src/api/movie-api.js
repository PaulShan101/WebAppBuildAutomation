export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())

    
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getUpcomingMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const addFavouriteMovie = (userName,id) => {
    return fetch(`/api/users/${userName}/favourites`,{
      headers: {
         'Content-Type': 'application/json'
      },
      method: `post`,
      body: JSON.stringify({userName: userName, id: id})
    } ).then(res => res.json());
  };

  export const getFavouritesMovies = (userName) => {
    return fetch(`/api/users/${userName}/favourites` 
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
    return response.json();
    })
    .catch((error) => {
      throw error
    });

  }

  




    
    
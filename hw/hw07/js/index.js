document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector("#search-github-user-input");
  const searchBtn = document.querySelector("#search-github-user-btn");
  const userInfoField = document.querySelector(".app__user-info");

  const extraInfoWrapper = document.querySelector(".app__extra-info");
  const followersWrapper = document.querySelector(".app__followers-content");
  const reposWrapper = document.querySelector(".app__repos-content");

  let timeout;

  const renderFollower = async (url) => {
    const data = await fetch(url);
    const jsonData = await data.json();

    if (jsonData?.message) {
      extraInfoWrapper.innerHTML = `<span class='error'>${jsonData.message}</span>`;
      return;
    }
    jsonData.forEach((item) => {
      const followerItem = document.createElement("div");
      followerItem.classList.add("follower-item");
      followerItem.innerHTML = `${item.login} — <a class="follower-url" href="${item.html_url}" target="_blank">View profile</a>`;
      followersWrapper.append(followerItem);
    });
  };

  const renderRepos = (url) => {
    fetch(url)
      .then((data) => data.json())
      .then((jsonData) => {
        console.log(jsonData);
        if (jsonData?.message) {
          userInfoField.innerHTML = `<span class='error'>${jsonData.message}</span>`;
          return;
        }

        jsonData.forEach((item) => {
          const reposItem = document.createElement("div");
          reposItem.classList.add("repos-item");
          reposItem.innerHTML = `${item.name} — <a class="follower-url" href="${item.svn_url}" target="_blank">View repo</a>`;
          reposWrapper.append(reposItem);
        });
      });
  };

  const renderUser = (info) => {
    userInfoField.innerHTML = `
      <div class="user__main-info">
        <div class="user__photo">
          <img class="user__photo-item" src="${
            info.avatar_url
          }" alt="User photo" />
        </div>

        <div class="user__username">${info.name}</div>
        
        <ul class="user__info-list">
          ${
            info.login
              ? `<li class="user__info-list-item">Login: ${info.login}</li>`
              : ""
          }

          ${
            info.company
              ? `<li class="user__info-list-item">Company: ${info.company}</li>`
              : ""
          }

          ${
            info.location
              ? `<li class="user__info-list-item">Location: ${info.location}</li>`
              : ""
          }

          ${
            info.email
              ? `<li class="user__info-list-item">Email: ${info.email}</li>`
              : ""
          }
        </ul>

        <button class="btn btn-primary">
          <a class="user-url" href="${
            info.html_url
          }" target="_blank">Open profile</a>
        </button>
      </div>
    `;

    extraInfoWrapper.style.display = "flex";
    renderFollower(info.followers_url);
    renderRepos(info.repos_url);
  };

  const hideExtraInfo = () => {
    if (extraInfoWrapper) {
      extraInfoWrapper.style.display = "none";
    }

    if (followersWrapper) {
      followersWrapper.innerHTML = "";
    }

    if (reposWrapper) {
      reposWrapper.innerHTML = "";
    }
  };

  const debounce = (fn, ms) => {
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };

      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };

  const getUser = (data) => {
    hideExtraInfo();
    const gotValue = typeof data === "string" ? true : false;
    let searchValue;

    if (gotValue && data.trim()) {
      searchValue = data;
    } else if (typeof data === "object" && data.target.value.trim()) {
      searchValue = data.target.value.trim();
    } else {
      userInfoField.innerHTML = '<span class="error">Incorrent username!</span>';
      return;
    }

    fetch(`https://api.github.com/users/${searchValue}?`)
      .then((data) => data.json())
      .then((jsonData) => {
        if (jsonData?.message) {
          userInfoField.innerHTML = `<span class='error'>${jsonData.message}</span>`;
          return;
        }

        renderUser(jsonData);
      });
  };

  const fetchUser = debounce(getUser, 1000);

  const searchUser = (value) => {
    clearTimeout(timeout);
    getUser(value);
  };

  searchInput.addEventListener("keyup", fetchUser);
  searchBtn.addEventListener("click", () => searchUser(searchInput.value));

  module.exports = {
    renderUser,
    renderFollower,
    renderRepos,
    hideExtraInfo,
    debounce,
    getUser,
    fetchUser,
    searchUser
  }
});
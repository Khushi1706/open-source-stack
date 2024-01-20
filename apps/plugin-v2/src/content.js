const getProjectName = (s) => {
  const url = s.replace('https://github.com/', '');
  const urlSplit = url.split('/');
  if (urlSplit.length === 2) {
    return urlSplit[1];
  }
  return '';
};

window.onload = () => {
  const layout = document.getElementsByClassName('Layout-sidebar');
  if (layout.length > 0) {
    const current = layout[0];
    if (!current?.children[0]) {
      return;
    }

    chrome.runtime.sendMessage(
      {
        type: 'FETCH_URL',
      },
      function (response) {
        const {
          data: { url },
        } = response;
        const projectName = getProjectName(url);
        apiCall(projectName, current.children[0]);
      }
    );
  }
};

const styles = {
  BEGINNER: `color:rgb(14,158,229)`,
  EASY: `color:rgb(42,227,111)`,
  INTERMEDIATTE: `color:rgb(255,187,0)`,
  HARD: `color:rgb(255,69,38)`,
  EXPERT: `color:rgb(37,0,13)`,
};

const capitalize = (s) => {
  if (!s) return '';
  if (s.length < 2) {
    return s;
  }
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

const apiCall = (projectId, parent) => {
  return fetch(`http://localhost:1227/api/v1/project/${projectId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      parent.innerHTML =
        `<div class="BorderGrid-row">
            <div class="BorderGrid-cell">
                <h2 class="mb-3 h4">Complexity</h2>
                <div>
                  <p class="f5 mb-2">Rating: ${
                    data?.averageRating?._avg?.rating
                  } / 5</p>
                  <h2 class="h5 mb-1">Difficulty</h2>
                  ${data?.difficulty?.reduce((prev, cur) => {
                    return (
                      prev +
                      `<p class="f5 ml-3 mt-1" style=${
                        styles[cur?.difficultyLevel]
                      }>${capitalize(cur?.difficultyLevel)} x ${
                        cur?._count?.rating
                      }</p>`
                    );
                  }, '')}
                  <p class="h6 mt-1">
                    <a data-view-component="true" class="Link--primary no-underline">
                      Read More
                    </a>
                  </p>
                </div>
            </div>
        </div>` + parent?.innerHTML;
    });
};

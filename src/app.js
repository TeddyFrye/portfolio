import { supabase } from "/services/supabaseClient.js";

async function getProjects() {
  const { data: projects, error } = await supabase.from("projects").select(`
    id, created_at, url, github_url, short_description, display_name, image_url, extras
  `);

  if (error) {
    console.error("Error fetching projects:", error);
    return;
  }

  displayProjects(projects);
}

function displayProjects(projects) {
  const projectContainer = document.getElementById("project-container");

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const descriptionHTML = project.short_description
      ? `<p>${project.short_description}</p>`
      : "";

    const githubIconSVG = `<svg class="icon-github" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="..."></path></svg>`;
    const liveIconSVG = `<svg class="icon-live" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" class="svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="..."></path></svg>`;

    projectDiv.innerHTML = `
      <div class="project-image">
        <img src="${project.image_url}" alt="${
      project.display_name
    } Screenshot">
      </div>
      <div class="project-info">
        <h3 class="project-title">${project.display_name}</h3>
        ${descriptionHTML}
        <div class="project-links">
          <a href="${
            project.github_url
          }" target="_blank" class="github-link">${githubIconSVG}</a>
          <a href="${
            project.url
          }" target="_blank" class="live-link">${liveIconSVG}</a>
        </div>
        <div class="project-extras">
          <!-- If 'extras' is a JSON field with more info, you can parse and display it here -->
          ${project.extras ? JSON.stringify(project.extras) : ""}
        </div>
      </div>
    `;
    projectContainer.appendChild(projectDiv);
  });
}

getProjects();


let projectsUrl = 'http://127.0.0.1:8000/api/projects/'

let getProjects = () => {

    fetch(projectsUrl)
    .then(response => response.json() )
    .then(data => {
        buildProjects(data)
        console.log(data);
    })
}

let buildProjects = (projects) =>{
    let projectWrapper = document.getElementById('projects-wrapper')
    for (let i=0; projects.length > i; i++){
        let project = projects[i]

        let projectCard = `
            <div class="project--card">
                <img src="http://127.0.0.1:8000${project.featured_image}" />
                <div>
                    <div class="card--header">
                        <h3>${project.title}</h3>
                        <strong class="vote--option">&#43;</strong>
                        <strong class="vote--option">&#8722;</strong>
                    </div>
                    <i>${project.vote_ratio}% Positive feedback</i>
                    <p>${project.description.substring(0,150)}</p>
                </div>
                
            </div>
        `
        projectWrapper.innerHTML += projectCard

    }



}



getProjects()
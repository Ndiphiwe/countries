let countries = JSON.parse(localStorage.getItem("countries")) ? JSON.parse(localStorage.getItem("countries")) : [] ;
function displayCountry(countries){
    document.getElementById("countries").innerHTML = "";

    countries.forEach((country, position) => {
        document.getElementById("countries").innerHTML += `
        
            <li>
                ${country.name} is in ${country.continent}
                <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal${position}">Update</button>
                <button class="btn btn-danger" onclick="deleteCountry(${position})">Delete</button>

                <div class="modal fade" id="exampleModal${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Please enter country</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <input type="text" value="${country.name}" id="update-input-${position}" class="form-control">
                            <label for="continrnt">Continent:</label>
                            <select name="continent" id="update-continent-${position}" class="btn btn-outline-secondary text-dark">
                                <option value="South America">South America</option>
                                <option value="Asia">Asia</option>
                                <option value="Africa">Africa</option>
                                <option value="North America">North America</option>
                                <option value="Australia">Australia</option>
                                <option value="Europe">Europe</option>
                            </select>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal${position}" onclick="updateCountry(${position})">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        
        `;
    });
}
displayCountry(countries);


function createCountry(){
       let country = document.querySelector("#addCountry").value;
       let continent = document.querySelector("#continent").value;
    try {
        if(!country)throw new Error("Please add country")
        countries.push({
            name: country,
            continent
        });
        localStorage.setItem("countries", JSON.stringify(countries))
        displayCountry(countries);
    } catch (error) {
        
        alert(error)
    }
}

function deleteCountry(position){
    countries.splice(position, 1);
    localStorage.setItem("countries", JSON.stringify(countries))
    displayCountry(countries);
}

function updateCountry(position){
    let country = document.querySelector(`#update-input-${position}`).value
    let continent = document.querySelector(`#update-continent-${position}`).value
    try {
        if(!country)throw new Error("Please add country when you update")
        countries[position] = {
            name: country,
            continent
        };
        localStorage.setItem("countries", JSON.stringify(countries))
        displayCountry(countries);
    } catch (error) {
        alert(error)
    }

}

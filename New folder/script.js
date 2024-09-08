const newButton = document.getElementById('newButton');
const fileInput = document.getElementById('fileInput');
const fileContainerTable = document.querySelector('.tab');

let files = [];

newButton.addEventListener('click', () => {
    fileInput.click();
});


fileInput.addEventListener('change', (e) => {
    const fileList = e.target.files;

    for (const file of fileList) {
        const fileDetails = {
            name: file.name,
            reason: 'you opened . Sep 2,2024',
            owner: 'Me', 
            location: 'My Drive' 
        };
        files.push(fileDetails);

        const fileElement = document.createElement('tr');
        fileElement.classList.add('file');
        fileElement.innerHTML = `
            <td>${fileDetails.name}</td>
            <td> ${fileDetails.reason}</td>
            <td><i class="fa-solid fa-d"></i>${fileDetails.owner}</td>
            <td> ${fileDetails.location}</td>
           <td> <button class="delete">Remove</button> </td>
        `;
        fileContainerTable.appendChild(fileElement);

        const deleteButton = fileElement.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            files = files.filter(f => f.name !== fileDetails.name);
            fileContainerTable.removeChild(fileElement);
        });
    }
});










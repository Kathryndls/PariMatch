const folderWrapper = document.querySelector('.folder-wrapper');

const createMenu = document.querySelector('#create-menu');
const createBtn = createMenu.querySelector('#create-btn');

const optionsMenu = document.querySelector('#options-menu');
const renameBtn = optionsMenu.querySelector('#rename-btn');
const deleteBtn = optionsMenu.querySelector('#delete-btn');

let target;

window.addEventListener('contextmenu', event => {
    event.preventDefault();  

    if (event.target.tagName === 'HTML') {
        optionsMenu.style.display = 'none';

        createMenu.style.cssText = `
            display: inline-block;
            top: ${event.clientY}px;
            left: ${event.clientX}px;
        `;
    } 
});

const hideContextMenu = (event) => {
    if (!event.target.classList.contains('context-menu')) {
        optionsMenu.style.display = 'none';
        createMenu.style.display = 'none';
    }
};

document.addEventListener('selectionchange', () => {
    console.log(document.getSelection().folderWrapper());
});

const showOptionsMenu = event => {
    target = event.target;

    createMenu.style.display = 'none';

    if (target.classList.contains('folder') || target.tagName === 'SPAN') { 
        if (target.tagName === 'SPAN') {
            target = target.parentNode;
        }
        optionsMenu.style.cssText = `
            display: inline-block;
            top: ${event.clientY}px;
            left: ${event.clientX}px;
        `;
    }
};

const rename = () => {
    const newName = prompt('Enter new name', '');

    optionsMenu.style.display = 'none';
    
    if (newName) {
        if (newName.length >= 11) {
            const shortName = newName.slice(0, 11) + '...';
            target.firstChild.textContent = shortName;
        } else {
            target.firstChild.textContent = newName;
        }
    } else {
        alert('New name cannot be empty! Try again...');
    }
};

const removeFolder = () =>  {
    optionsMenu.style.display = 'none';
    target.remove();
};

const createFolder = () => {
    const folderName = prompt('Enter file name', '');

    createMenu.style.display = 'none';
    
    if (folderName) {
        const folder = document.createElement('div');

        if (folderName.length >= 11) {
            const shortName = folderName.slice(0, 11) + '...';
            folder.innerHTML = `<span>${shortName}</span>`;
        } else {
            folder.innerHTML = `<span>${folderName}</span>`;
        }

        folder.classList.add('folder');
        folderWrapper.append(folder);
    } else {
        alert('Folder name cannot be empty');
    }
};

const removeFolders = (event) => {
    if (event.key === 'delete' && folder.classList.contains('active')) {
        folder.remove();
    }
};

const activFolder  = (event) => {
    if (event.ctrlKey) {
        folder.classList.add('active');
    }
};


window.addEventListener('click', hideContextMenu);
folderWrapper.addEventListener('contextmenu', showOptionsMenu);
renameBtn.addEventListener('click', rename);
deleteBtn.addEventListener('click', removeFolder);
createBtn.addEventListener('click', createFolder);

folder.addEventListener('click', activFolder);
window.addEventListener('click', removeFolders);
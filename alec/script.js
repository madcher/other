window.addEventListener('load', initState);

// state of our folders
let folderState = {};

// initialize folder state (closed)
function initState() {
	addHandlers()
	Object.keys(massive).forEach( el => {
		folderState[el] = false;
	});
}

function initTable() {
	// generate table
  	let table = document.querySelector('.main-table');

  	// sort for folder first
  	let companies = Object.keys(massive).sort(sortFolders);

  	// generate table
  	generateTable(table, massive, companies, 1);

  	// folders open/close handler
  	let folders = document.querySelectorAll('.folder');
  	folders.forEach( el => {
  	 	el.addEventListener('click', folderOpenClose);
  	});
}
function addHandlers() {
	let addFolderBtn = document.querySelector('.add-folder-button');

  	let modal = document.querySelector('.modal');
  	let modalBack = document.querySelector('.modal-background');
  	let modalClose = document.querySelector('.close-modal');

  	addFolderBtn.addEventListener('click', function() {
    	modal.style.display = 'flex';
    	modalBack.style.display = 'flex';
  	});

  	// open modal
  	addFolderBtn.addEventListener('click', function() {
    	modal.style.display = 'flex';
    	modalBack.style.display = 'flex';
  	});

  	// close modal
  	modalClose.addEventListener('click', function() {
    	modal.style.display = 'none';
    	modalBack.style.display = 'none';
  	});
  	initTable();
};

function generateTable(parent, object, elements, level) {
	parent.innerHTML = '';
	generateRows(parent, object, elements, level);
}

function generateRows(parent, object, elements, level) {
	elements.map( el => {
    	// create rows
    	let row = document.createElement('div');
    	row.className = 'table-row';

    	// set paddig for ierarchy
    	row.style.paddingLeft = (level-1) * 10 + 'px';
    	if (object[el].folder) {
      		row.className  += ' folder';
      		row.setAttribute('id', el);
    	} else {
        row.className  += ' file';
      }

    	// generate cells
    	for (let i = 0; i < Object.keys(object[el]).length; i++) {  
      		let key = Object.keys(object[el])[i];

      		if (key !== 'folder' && key !== 'childs') {
        		// create cells
        		let cell = document.createElement('div');
            cell.className = 'cell'
        		cell.innerHTML = `${object[el][key]}`
        		row.append(cell);
      		}
    	}
    	parent.append(row);

    	if (folderState[el] === true) {
    		generateRows(parent, object[el].childs, Object.keys(object[el].childs), level + 1);
    	}
  	});
}

function folderOpenClose(e) {
	// folder id
	let id = e.target.parentNode.id;

	folderState[id] = !folderState[id];
  	let table = document.querySelector('.main-table');

  	// sort for folder first
  	let companies = Object.keys(massive).sort(sortFolders);

  	// redraw table
  	initTable();
};

function sortFolders(a, b) {
  	return +massive[b].folder - +massive[a].folder;
}

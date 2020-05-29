/*
*
*	Scripts for Article Pages
*
*/


const articleElements = {
	contents: document.querySelector('#contents'),
	contentsTitle: document.querySelector('#contentsTitle'),
	contentsList: document.querySelector('#contentsList'),
	contentsWrapper: document.querySelector('#contents'),
};


// Select all sub-headings in the markdown
const headings = document.querySelectorAll('#article h2, #article h3, #article h4, #article h5');


[...headings].map((heading, index) => {
	// Create list item element for each heading
	const listItem = createListItem(heading, index);

	// Push list item into list
	articleElements.contentsList.appendChild(listItem);

	// Assign ID to the headers, to allow linking
	heading.setAttribute('id', `heading-${index}`);
});

// Set the contents title
articleElements.contentsTitle.innerText = "Contents";


// Build list item and link based on a heading element
function createListItem (element, index) {
	const listItem = document.createElement('li');
	const listLink = document.createElement('a');

	const className = `contents__list-item contents__list-item--${element.tagName.toLowerCase()}`;
	listItem.setAttribute('class', className);
	listLink.innerText = element.innerText;
	listLink.setAttribute('href', `#heading-${index}`);

	listItem.appendChild(listLink);
	return listItem;
};

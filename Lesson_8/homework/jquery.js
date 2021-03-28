console.log("Hello from the jquery.js");

// 1. Change the body tag so that everything on the page is centered.
$('body').css({
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center'
    /*'justify-content':'center'*/
});

// 2. Change the text of "Old title" to "New title".
$('#title').text(function() {
    return "New title";
});

// 3. Change the background color of the subtitle box to any color you like.
$('.subtitle-box').css({ 'background-color': 'lightblue' });

// 4. Make sure that the temp-subtitle isn't displayed without actually removing the element from DOM.
$('.temp').remove();

// 5. Put a dashed border box of any pixel width around any div that has the class "reason"
$('.reason').css({ 'border-style': 'dashed' });

// 6. Change the li's inside of the ordered list to be bold.
$('ol>li').css({ 'font-weight': 'bold' });

// 7. Change the last li to be underlined.
$('li').last().css({ 'text-decoration': 'underline' });

// 8. Change the second li element to have a line through it. 
$('ol').children(('li')).eq(1).css({ 'text-decoration': 'line-through'});

// 9. Change all the elements inside of the second-list to italics in one query.
$('ul#list').css({ 'font-style': 'italic' });

// 10. Change the span font size in the unordered list to be half as small. Using em is better than pixels.
$('ul#list>span').css({ 'font-size': '0.5em'});

// 11. Remove the first label element in the unused box.
$('.unused-box>label').remove();

// 12. Add a paragraph that says "Second Sentence".
$('ul').append( "<p>Second Sentence</p>" );

// 13. After finishing 12 add a paragraph before it that says "First Sentence".
$('ul>p').prepend( "<p>First Sentence</p>" );

// 14. You can finally change the class name of unused-box to used-box.
$('.unused-box').attr('unused-box', 'used-box');
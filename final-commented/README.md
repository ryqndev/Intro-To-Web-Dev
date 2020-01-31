# Understanding HTML

HTML stands for hypertext markup language but the important part is the last half of 
that word: markup language. The memes are all true - HTML is NOT a programming language
and this distinction is important when you're learning html. HTML is meant to display 
the content and structure of a website and only that. If you were to write 2 + 2 in HTML,
it would literally just display "2 + 2" and not calculate 4.

With this in mind, know that pretty much all text that you write in your html file will end 
up being displayed on the website and that's because the text in html defines the content 
of your website. Aside from text, you'll find something called "tags" in html. Tags can be
recognized as text with angled brackets (< and >). Tags are what we use to denote the structure
of a webpage. Most HTML tags are opened with an opening tag <tagName> and then closed with a 
closing tag </tagName>. Note that the difference between the two is that the closing tag name 
is prefixed with a backslash '/'.

An example can be seen here:

```html
<div>
  This is text inside a div
</div>
```

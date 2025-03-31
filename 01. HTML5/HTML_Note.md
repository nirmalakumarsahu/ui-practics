HTML
-------------
HTML stands for Hypertext markup language

Why Lean HTML?
---------------------
- Website/ Web pages
- Career as a web designer
- Mobile application development (Phonegap/ Ionic)

Which HTML version?
-----------------------------------
HTML 5 (BEST) and HTML 4

Software requirement
--------------------------
1. HTML editor
    a. Notepad
    b. Notepad++
    c. Visual Studio code (Best)
    d. Sublime
    e. Atom

2. Browser
    a. Chrome (Best)
    b. Firefox
    c. Internet Explorer
    d. Safari (Mac)
    e. Opera

Basic syntax
-----------------
tag - <>
- <tag> </tag>

E.g.
<html>
    <head>  
        <title>First Web Page</title>
    </head>
​    <body>
​        .............
​        .............
​    </body>
</html>

HTML file save should save with .html (filename.html)

Text Formatting tags
------------------------
- Headings <h1></h1>, ...., <h6></h6>
- Paragraphs <p></p>
- Bold <b></b>
- Italic <i></i>
- Underline <u></u>
- Strikethrough <s></s>
- Subscript <sup>
- Super script <sub>
- Break <br><br>
- NonBreaking Space &nbsp;
- Font tag <font></font> (color, size, face) - outdated form HTML5

Listing Tag
---------------------------
- Unorder list <ul></ul> (type)
- Order list <ol></ol> (type, start)\
- Description list <dl><dt><dd></dd></dt></dl>

Marquee Tag
------------------
<marquee></marquee> (behavior, direction, scrollamount, loop) - outdated form HTML5

Preformatted & Horizontal rule tags
-------------------------------------------
Horizontal rule <hr> (width, align, size, color) - outdated form HTML5
Preformatted <pre><pre>

Image tag
----------------
<img> (src, alt. width, height, title)

Anchor tag (Hyperlink)
---------------------------------
<a></a> (href, target, name)
- External page link
- Another site link
- Internal page link (link - href="#a", bookmark - name="a")
- Mailto Link (href="mailto:<mailid>" or href="mailto:<mailid>?subject="Query for the site" or href="mailto:<mailid>?cc=<mailid>&subject="Query for the site")
- Tel Link (href="tel:<phoneno>")

Table tags
-------------------
<table> (border, cellpadding, width, cellspacing, align, bgcolor)
    <caption></caption>
    <tr> (||, rowspan)
        <th>....</th>  (||, height, valign, colspan)
        <th>....</th>
    </tr>
    <tr>
        <td>....</td> (||, height, valign, colspan)
        <td>....</td>
    </tr>
</table>

- <thead></thead>
- <tbody></tbody>
- <tfoot></tfoot>

Iframe tag
-----------------------
<iframe></iframe> (src, width, height, frameborder)

Audio tag
----------------
Supported - MP3, Ogg, Wav
<audio> (controls, autoplay, loop, muted, src, type)
    <source/> (src, type="audio/mpeg")
</audio>

Video tag
------------------
Supported - Mp4, WebM, Ogg
<video> (controls, autoplay, muted, loop, src, type, width, height, poster)
    <source/> (src, type="video/mp4")
</video>

Form tags
------------------
- Input text box
- Input password box
- Input radio button
- Input checkbox
- Select box/ Drop down
- Text area
- Input rest button
- Input submit button
- Lebel tag

<form> (action, method)
    <fieldset>
        <legend></legend>
        <label></label> (for)
        <input/> (type, name, readonly, required, value, placeholder, title)
        <textarea></textarea> (name cols rows)
        <select> (name, size, multiple)
            <option></option> (value, selected)
        </select>
        <select> (name, size, multiple)
            <optgroup> (label)
            <option></option> (value, selected)
            </optgroup>
        </select>
        <input> (list="cars") [input+select features]
        <datalist> (id="cars")
        </datalist>
    </fieldset>
</form>

New and old different input types
-------------------------------------------
type="button"
type="checkbox"    
type="color"  
type="date"         
type="datetime"
type="datetime-local"
type="email"
type="file" (accept="image/*")
type="hidden"    
type="image" (src, alt)   
type="month"    
type="number" (min, max, step)
type="password"    
type="radio"    
type="range" (min, max, step)  
type="reset" (value)   
type="search"    
type="submit" (value)   
type="tel"  
type="text"    
type="time"    
type="url"    
type="week"    

Other tabs
-------------------
<div></div>
<span></span>
<link>(rel="stylesheet", type="text/css", href="style.css")
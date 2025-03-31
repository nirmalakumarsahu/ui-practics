CSS
--------------
CSS stands for Cascading style sheet

Why Learn CSS?
----------------------
- Styling the HTML tags
- Responsive website
- Animation on Webpage
- 2D and #D transformation of HTML elements
- Website development process fast

Software requirement
--------------------------
- CSS editor same as HTML editors
- Browser same as HTML browsers

3 Ways to implement CSS
-----------------------------
- Inline style
    <h1 style="color:yellow;">.............</h1>

- Inpage style tag
    <html>
        <head>
            <style>
                h1 {
                    color:green;
                }
            </style>
        </head>
        <body>
            <h1>............</h1>
        </body>
    </html>

- External style sheet
    file - style.css
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

Color & Background-color
----------------------------
color: red; 
background-color: antiquewhite;

4 types of Basic selectors
--------------------------
- By tag name
    h1 {

    }
    <h1>................</h1>

- Class [.]
    - Class can use multiple times in one page.
    .header {

    }
    <h1 class="header">................</h1>

- Id [#]
    - Id can only use one time in one page.
    #header_menu {

    }
    <h1 id="header_menu">................</h1>

- Descendant
    #header a {

    }
    .list p {

    }
    ul#menu li {

    }

Border 
------------------
    Border properties
    ---------------------
    border-width: 2px;
    border-style: solid;
    border-color: red;

    border styles values
    -------------------------
        - solid     - ridge
        - dotted    - inset
        - dashed    - outset
        - double    - none
        - groove    - mix
    
    border shorthand
    -------------------
    border: 2px solid red;

    border side
    ---------------
    border-top:
    border-right:
    border-bottom:
    border-left:

Outline
---------------------
    Outline properties
    ---------------------
    border-width:
    border-style:
    border-color:
    border-offset:

    Outline shorthand
    -------------------
    outline: 2px solid red;

Padding
------------
    Padding properties
    ---------------------
    padding-top:
    padding-right:
    padding-bottom:
    padding-left:

    Padding shorthand
    ----------------------
    padding: 1opx;
    padding: 10px 20px 20px 25px; (Clock wise)

Margin
-------------------
    Margin properties
    ---------------------
    margin-top:
    margin-right:
    margin-bottom:
    margin-left:

    Margin shorthand
    -------------------------
    margin: 10px 20px 15px 25px;

Height & Width
-------------------------
width: <----> [for fix use px]
height: | 

min-height:
max-height:
min-width:
max-width:

Box sizing
-------------------
box-sizing: border-box;
contetn-box default not useful

Overflow
-------------------
    Values
    --------------
        - hidden
        - scroll
        - auto
        - visible - default not useful
    
    3 types of overflow properties
    -------------------------------
    overflow:
    overflow-x:
    overflow-y:

Border-Radius
--------------------------
border-top-left-radius:
border-top-right-radius:
border-bottom-left-radius:
border-bottom-right-radius:

    shorthand
    --------------
    border-radius:

Box-Shadow
-----------------------
box-shadow: 2px 2px 5px 10px orange;
            h-offset v-offset blur spread color;

Float
-----------------
float: left;

Clear
--------------
clear: both;

    values
    ----------
        - left
        - right
        - both

Font
------------------
    Font properties
    ----------------------
    font-size:
    font-family:
    font-weight:
    font-style:
    font-variant:
    line-height:

    font-size predefined values
    ---------------------------------
        - xx-small
        - x-small
        - small 
        - smaller
        - medium
        - large
        - x-large
        - xx-large

Text 
---------------
    Text properties
    -----------------------
    text-align:
    text-align-last:
    text-transform:
    text-indent:
    word-spacing:
    letter-spacing:

Text Decoration
-----------------------------
    Text Decoration properties
    ------------------------------
    text-decoration-line:
    text-decoration-color:
    text-decoration-style:

    text-decoration-line values
    ----------------------------------
        - underline
        - overline
        - line-through
        - none
    
    text-decoration-style values
    ----------------------------------
        - solid
        - dotted
        - dashed
        - double
        - wavy
    
    Text Decoration shorthand
    -------------------------------------
    text-decoration: underline red wavy;

Word Wrap & Word break
---------------------------
word-wrap: break-word;
word-break: break-all;

Text shadow
--------------------
text-shadow: 2px 2px 5px orange;
            h-shadow v-shadow blur-radius color

White space
----------------------
white-space:

    White space values
    --------------------------
        - normal
        - nowrap
        - pre
        - pre-line
        - pre-wrap

Text overflow
-----------------------
text-overflow:

    Text overflow values
    ---------------------------
        - clip (default)
        - ellipsis
        - string

Writing mode
-------------------------
writing-mode:

    Writing mode values
    -----------------------------
        - horizontal-tb (default)
        - vertical-rl
        - vertical-lr
        - sideways-rl 
        - sideways-lr

Column count
--------------------
column-count: 

    Column properties
    --------------------------------
    column-count: {will not work if yopu mention column-width}
    column-gap:
    column-rule:
    column-rule-width:
    column-rule-style:
    column-rule-color:
    column-width:
    column-fill:
    column-span:
    column:

@font-face rule
---------------------------------
It will download the font family, if the font family is not available
in other different OS systems.

@font-face {
    font-family: myFirstFont;
    src: url(open_sans.woff);
    src: url(fonts/open_sans.woff); //if in any folder
    src: url(open_sans.woff);
}

h1 {
    font-family: myFirstFont;
}

    Font format
    ---------------
        - TTF/ OTF - supported by all browser
        - WOFF - supported by all browser
        - WOFF2 - Chrome 36.0, Firefox 35.0, Opera 26.0
        - SVG - Chjrome 4.0, Safari 3.2, Opera 9.0
        - EOT - MS Edge 6.0

Website to collect fort URL: https://www.fontsquirrel.com/

Note: Not recommended to use.

Google fonts
-----------------------
URL: https://fonts.google.com/

List-Style
--------------------
list-style-image:url()
list-style-position:
list-style-type:
list-styleL:

For Icon image: https://www.iconfinder.com/

Background Image
------------------------------
background-image: url(imagepath)
background-repeat:
background-position:

    background-repeat values
    ------------------------------
        - repeat
        - no-repeat
        - repeat-x
        - repeat-y
        - space
        - round

    background-position values
    -----------------------------------
        - left top          - right bottom
        - left centet       - center top
        - left bottom       - center center
        - right top         - center bottom
        - right center

Background Attachment
---------------------------------
background-attachment:

    values
    --------------
        - scroll
        - fixed

Background size
---------------------------
background-size:

    Background size values
    -----------------------------
        - auto
        - length (px)
        - percentage (%)
        - cover
        - contain

Background origin
---------------------------
background-origin:

    Background origin values
    -------------------------------
        - padding-box
        - border-box
        - content-box

Background clip
------------------------
background-clip:

    Background clip values
    --------------------------------
        - padding-box
        - border-box
        - content-box

Colors modes
--------------------
- Color name 
- Hexadecimal (#rrggbb)
- RGB [rgb(255,0,0)] 
- RGBA [rgba(255,0,0,0.6)]
- HSL [hsl(0, 100%, 50%)]
- HSLA [hsla(0, 100%, 50%, 0.6)]

    RGB - Red Green Blue
    HSL - Hue Saturation Lightness
        Hue: 0-360
        Saturation: 0-100%
        Lightness: 0-100%

    RGBA, HSLA - A means alpha

Gradients
---------------------
Differnt CSS Gradients type
--------------------------------------
Linear Gradients - 
    background: linear-gradient(orange, white, green);

    For direction
        background: linear-gradient(to right, orange, white, green);
                                    to bottom
                                    to left

    For degree
        background: linear-gradient(45deg, orange, white, green);

Repeating Linear Gradients -
    background: repeating-linear-gradient(to right, orange, white 10%, green 20%);
                                                              
Radial Gradients -
    background: radial-gradient(orange 20%, white 20%, green);
    
    For change shape
        background: radial-gradient(circle, orange 20%, white 20%, green);

    For Corner position
        background: radial-gradient(closest-side at 80% 50%, red, yellow, green);           
                                    closest-corner
                                    farthest-side
                                    farthest-corner

Repeating Radial Gradients
    background: repeating-radial-gradient(orange 20%, white 20%, green);

Opacity
------------------
To make tags transparent
opacity: 0.5;

Background Blend Mode
------------------------------------
background-blend-mode: darken;

    Background blend mode values
    ---------------------------------------
        - Normal        - color-dodge   - hue
        - Multiple      - color-burn    - color
        - Screen        - hard-light    - saturation
        - Overlay       - soft-light    - luminosity
        - Darken        - difference
        - Lighten       - exclusion

Mix Blend Mode
--------------------------
mix-blend-mode: darken;

    Mix blend mode values
    ---------------------------------------
        - Normal        - color-dodge   - hue
        - Multiple      - color-burn    - color
        - Screen        - hard-light    - saturation
        - Overlay       - soft-light    - luminosity
        - Darken        - difference
        - Lighten       - exclusion

Display 
---------------------
display: inline;

    Display values
    ----------------------
        - none          - inline-flex   - table-caption
        - inline        - inline-grid   - table-column-group
        - block         - table         - table-row-group
        - inline-block  - inline-table  - table-header-group
        - list-item     - table-row     - table-footer-group
        - flex          - table-cell    - run-in
        - grid          - table-column  - contents

Visibility
------------------------
visibility: hidden;

    Visibility values
    --------------------------
        - Visible
        - Hidden
        - Collapse (For table only)

Design Basic Layout
---------------------------------

Position
----------------------
position: relative;
left: 100px;

    Position Values
    ------------------------------
        - static
        - relative
        - absolute
        - fixed
        - sticky
    
    Necessary CSS Properties with Position
    -----------------------------------------------------
        - left
        - right
        - top
        - bottom

Z-index
---------------
work with position
z-index: 1;

Media Queries
-------------------------
@media screen and (max-width: 900px) {
    .container {
        width: 50%
    }
}

    Media Types
    ----------------------
        - all
        - print
        - screen
        - speech

    Media conditions
    --------------------------------------
        - any-hover         - inverted-colors       - min-aspect-ratio  
        - any-pointer       - light-level           - min-color
        - aspect-ratio      - max-aspect-ratio      - min-color-index
        - color             - max-color             - min-height
        - color-gamut       - max-color-index       - min-monochrome
        - color-index       - max-height            - min-resolution
        - grid              - max-monochrome        - min-wdith
        - height            - max-resolution        - monochrome
        - hover             - max-width             - orientation

        - overflow-block
        - overflow-inline
        - pointer
        - resolution
        - scan
        - scripting
        - update
        - width

    Logical operatiors
    ----------------------------------
        - and 
        - or
        - only

Table Properties
--------------------------------
border-spacing:
border-collapse:
vertical-align:
caption-side:
empty-cells:
table-layout:

Resize
----------------
Work with overflow
resize: vertical;

    Resize values
    ------------------------
        - horizontal
        - vertical
        - both
        - none

Cursor
----------------------
cursor: wait;

    Cursor values
    -------------------------
        - auto              - n-size      
        - default           - ne-resize
        - none              - nw-resize
        - context-menu      - s-resize
        - help              - se-resize
        - pointer           - sw-resize
        - progress          - w-resize
        - wait              - ew-resize
        - cell              - ns-resize
        - crosshair         - new-resize
        - text              - nwse-resize
        - vertical-text     - col-resize
        - alias             - row-resize
        - copy              - all-scroll
        - move              - zoom-in
        - no-drop           - zoom-out
        - not-allowed       - grab
        - e-resize          - grabbing

Measurement Units
--------------------------
    - px (pixel)
    - % (Percentage)
    - em
    - rem
    - vw (viewport width)
    - vh (viewport height)
    - vmax (viewport maximum)
    - vmin (viewport minimum)

    Absolute Units
    ----------------------
        - cm (centimeters)
        - mm (milimeters)
        - in (inches)
        - px (pixels)
        - pt (points)
        - pc (picas)

    Relative Units
    --------------------------
        - em
        - rem (relative em)
        - ch
        - vw (viewport width)
        - vh (viewport height)
        - vmax (viewport maximum)
        - vmin (viewport minimum)
        - % percentage

Variables var() function
------------------------------------------------
Useage:
    Global Scope
    --------------------
    :root {
        --main-color: red;
    }
    .classA {
        color: var(--main-color)
    }

    Local Scope
    --------------------
    .classA {
        --main-color: red;
        color: var(--main-color)
    }
    .classA a {
        background-color: var(--main-color);
    }

calc() function
------------------------------------------
Useage 
    .classA {
        width: calc(100% - 1em);
    }

    .classB {
        width: calc(100%/2);
    }

    .classC {
        background-image: url(logo.png);
        background-position: calc(100%-50px);
    }

    calc() arithmetic operatiors
    ----------------------------------
    +   addition
    -   substraction
    *   Multiplication
    /   division

Clip-path
--------------------
clip-path: circle();22

    Clip-path values
    ---------------------
        - circle
        - ellipse
        - inset
        - polygon

    This website to get different clip shape - https://bennettfeely.com/clippy/

    This website to check the css and tags are support in your browser or not - https://caniuse.com/

Shape-Outside
------------------------
clip-path: circle(35% at 50% 50%);
shape-outside: circle(35% at 50% 50%); 
shape-margin: 20px;

    Clip-path values
    ---------------------
        - circle
        - ellipse
        - inset
        - polygon

Filter
----------------------
filter: sepia(100%);

    Filter Values
    -------------------
        - none             - hue-rotate()
        - blure()          - invert()
        - brightness()     - opacity()
        - contrast()       - saturate()
        - drop-shadow()    - sepia()
        - grayscale()      - url()

Transition
------------------
    Transition properties
    ------------------------------
    - transition
    - transition-property
    - transition-duration
    - transition-delay
    - transition-timing-function

    transition-timing-function values
    ---------------------------------------------
    Unit            Description
    --------------------------------------
    ease            slow start, then fast, then end slowly
    linear          same speed from start to end
    ease-in         slow start
    ease-out        slow end
    ease-in-out     slow start and end
    step-start
    step-end
    steps(4, end)
    cubic-bezier    lets you define your own values

Transform - 2D 
-----------------------------------------
56
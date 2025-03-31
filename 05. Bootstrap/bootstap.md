What is Bootstap
---------------------------
- Bootstap is a CSS and JS based front-end framework, developer by Twitter.

    Common things in website
        - Layout
        - Typography
        - Navigation menu
        - Form Layout
        - Buttons
        - Pagination
        - Icon fonts
        - Responsiveness

- By using bootstrap we can make faster and easier web development and easily create responsive web layouts. 

Advantages of using Bootstrap
-----------------------------------------
    - Save lots of time
    - Responsive features
    - Consistent Design
    - Easy to use
    - Compatible with browsers
    - Open source

Bootstrap CSS features & components
-----------------------------------------------------
    - Multi-column layouts      - Jumbotron
    - Form layouts              - Page headers
    - Button groups             - Thumbnails
    - Button dropdowns          - Alerts
    - Input groups              - Progress bars
    - Navs                      - List group
    - Navbar                    - Panels
    - Dropdowns                 - Media object
    - Breadcrumbs               - Responsive embed
    - Pagination                - Wells
    - Labels                    - Glyphicons
    - Badges
    
Bootstap JS components
---------------------------------       jQuery Plugins
    - Model box         - Popover
    - Dropdown          - Alert
    - Scrollspy         - Collapse
    - Tab               - Carousel
    - Tooltiop          - Affix

Bootstrap 3 vs. Bootstrap 4
---------------------------------------
    - Flexbox layouts
    - New components
    - Faster
    - More Responsiveness

Bootstrap 4 Compability
------------------------------------
    - Supports all major browsers and platforms
    - Internet Explorer 9 and down is not supported

Other Popular CSS Frameworks
---------------------------------------
    - Materialize CSS
    - Foundation
    - Bulma
    - Semantic UI
    - Pure.CSS
    - Tailwind CSS
    - Skeleton
    - Uikit
    - Bootflat
    - Groundwork

Installation
----------------------------
URL - https://getbootstrap.com/

CDN LINKS - 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

Container and Row class
-------------------------------
    3 Boot CSS classes for Layout
        - container
        - row
        - col

    container class with different break points <breakpoint>
    -----------------------------------------------------
        xl - Extra Large >= 1200px
        lg - Large >= 992px
        md - Medium >= 769px
        sm - Small >= 576px
             Extra Small < 566px

    Layout classes sequence
    --------------------------------
        .container
            |-> .row
                  |-> .col
    
    Grid system
    -----------------------
    we have 12 type of column in a row, col-1 to col-12

Offset
---------------------------
    - Gap from left side
    E.g.
        - .offset-3
        - .offset-md-3

Reordering class
-----------------------------------
    - change the col position.accordion
    E.g.
        - .order-first
        - .order-last
        - .order-0/1 to order-11/12
        - .order-<breakpoint>-0/1 to .order-<breakpoint>-11/12

Nesting
------------------------
    - col inside col is called nesting
    - So inside col you have to take row and inside 
    row you have to take col.

Margin classes
----------------------------
    - Use to add margin
    E.g.
        - .m-auto
        - .mr-auto {margin-right}
        - .ml-auto
    
    Margin classes for different sides
    --------------------------------------------
        - Margin            .m-*
        - Margin-right      .mr-*
        - Margin-left       .ml-*
        - Margin-top        .mt-*
        - Margin-bottom     .mb-*
    
    * means sizes 0-5
    ---------------------
        0 - 0px
        1 - 0.25rem
        2 - 0.50rem
        3 - 0.1rem
        4 - 1.5rem
        5 - 3rem
        
    margin using break point
    ---------------------------------
        - .m-<breakpoint>-*
        - .ml-<breakpoint>-*
        - .mr-<breakpoint>-*
        - .mt-<breakpoint>-*
        - .mb-<breakpoint>-*
    
    negative margin using break point
    ---------------------------------
        - .m-<breakpoint>-n*
        - .ml-<breakpoint>-n*
        - .mr-<breakpoint>-n*
        - .mt-<breakpoint>-n*
        - .mb-<breakpoint>-n*

Padding classes
------------------------------------------
    Padding classes for different sides
    --------------------------------------------
        - Padding            .p-*
        - Padding-right      .pr-*
        - Padding-left       .pl-*
        - Padding-top        .pt-*
        - Padding-bottom     .pb-*
    
    * means sizes 0-5
    ---------------------
        0 - 0px
        1 - 0.25rem
        2 - 0.50rem
        3 - 0.1rem
        4 - 1.5rem
        5 - 3rem
    
    Padding using break point
    ---------------------------------
        - .p-<breakpoint>-*
        - .pl-<breakpoint>-*
        - .pr-<breakpoint>-*
        - .pt-<breakpoint>-*
        - .pb-<breakpoint>-*

Horizontal Alignment    - row
----------------------------------
    - To align the col of a row

    classes
    ----------------
        - .justify-content-start
        - .justify-content-end
        - .justify-content-around
        - .justify-content-between
        - .justify-content-center
    
    classes with break point    -- row
    -----------------------------------
        - .justify-content-<breakpoint>-start
        - .justify-content-<breakpoint>-end
        - .justify-content-<breakpoint>-around
        - .justify-content-<breakpoint>-between
        - .justify-content-<breakpoint>-center

Vertical Alignment      -- row
---------------------------------
    Item classes
    ----------------
        - .align-items-start
        - .align-items-end
        - .align-items-center
        - .align-items-stretch //optional
        - .align-items-baseline

    Item classes with break point
    -----------------------------------
        - .align-items-<breakpoint>-start
        - .align-items-<breakpoint>-end
        - .align-items-<breakpoint>-center
        - .align-items-<breakpoint>-stretch //optional
        - .align-items-<breakpoint>-baseline
    
    Content classes
    -------------------------
        - .align-content-start
        - .align-content-end
        - .align-content-center
        - .align-content-between
        - .align-content-around
        - .align-content-stretch //optional
    
    Content classes with break point
    ---------------------------------------
        - .align-content-<breakpoint>-start
        - .align-content-<breakpoint>-end
        - .align-content-<breakpoint>-center
        - .align-content-<breakpoint>-between
        - .align-content-<breakpoint>-around
        - .align-content-<breakpoint>-stretch   //optional

    Self class
    -------------------
        - .align-self-start
        - .align-self-end
        - .align-self-center
        - .align-self-baseline
        - .align-self-auto  //optional
        - .align-self-stretch   //optional
    
    Self class with break point
    ----------------------------------------
        - .align-self-<breakpoint>-start
        - .align-self-<breakpoint>-end
        - .align-self-<breakpoint>-center
        - .align-self-<breakpoint>-baseline
        - .align-self-<breakpoint>-auto  //optional
        - .align-self-<breakpoint>-stretch   //optional

Flex-Direction classes      - row
------------------------------------
    - .flex-row
    - .flex-row-reverse
    - .flex-column
    - .flex-column-reverse
    - .flex-wrap
    - .flex-row-reverse
    - .flex-nowrap
    - .flex-fill

    flex with break point
    ---------------------------------------
        - .flex-<breakpoint>-row
        - .flex-<breakpoint>-row-reverse
        - .flex-<breakpoint>-column
        - .flex-<breakpoint>-column-reverse
        - .flex-<breakpoint>-wrap
        - .flex-<breakpoint>-row-reverse
        - .flex-<breakpoint>-nowrap
        - .flex-<breakpoint>-fill

Display
------------------------
    classes
    -------------------------------
        - .d-none
        - .d-inline
        - .d-block
        - .d-table
        - .d-table-cell
        - .d-table-row
        - .d-flex
        - .d-inline-block
        - .d-inline-flex
    
    classes with break point
    -------------------------------
        - .d-<breakpoint>-none
        - .d-<breakpoint>-inline
        - .d-<breakpoint>-block
        - .d-<breakpoint>-table
        - .d-<breakpoint>-table-cell
        - .d-<breakpoint>-table-row
        - .d-<breakpoint>-flex
        - .d-<breakpoint>-inline-block
        - .d-<breakpoint>-inline-flex
    
    print related classes
    -------------------------------------
        - .d-print-none
        - .d-print-inline
        - .d-print-block
        - .d-print-table
        - .d-print-table-cell
        - .d-print-table-row
        - .d-print-flex
        - .d-print-inline-block
        - .d-print-inline-flex

Float & Clearfix classes
----------------------------------------
    - .float-left
    - .float-right
    - .float-none
    - .clearfix

    float & clearfix classes with break point
    -----------------------------------------------
        - .float-<breakpoint>-left
        - .float-<breakpoint>-right
        - .float-<breakpoint>-none

    width classes
    ----------------------
        - .w-25
        - .w-50
        - .w-75
        - .w-100
        - .w-auto
        - .mw-100
    
    height classes
    ------------------
        - .h-25
        - .h-50
        - .h-75
        - .h-100
        - .h-auto
        - .mh-100
    
    viewport height & width classes
    --------------------------------
        - .vh-100
        - .min-vh-100
        - .vw-100
        - .min-vw-100

Position class
--------------------------
    - .position-relative
    - .position-absolute
    - .position-static
    - .position-fixed
    - .position-sticky
    - .fixed-top
    - .fixed-bottom
    - .sticky-top

Overflow class
---------------------------
    - .overflow-auto
    - .overflow-hidden

Padding and Margin
------------------------------------
    - .py-*
    - .px-*
    - .my-*
    - .mx-*

    * means sizes 0-5
    ---------------------
        0 - 0px
        1 - 0.25rem
        2 - 0.50rem
        3 - 0.1rem
        4 - 1.5rem
        5 - 3rem
    
    Padding and Margin wioth break point 
    ------------------------------------
        - .py-<breakpoint>-*
        - .px-<breakpoint>-*
        - .my-<breakpoint>-*
        - .mx-<breakpoint>-*

Background Color classes
----------------------------------
    - .bg-primary
    - .bg-secondary
    - .bg-success
    - .bg-danger
    - .bg-warning
    - .bg-info
    - .bg-light
    - .bg-dark
    - .bg-white
    - .bg-transparent

Text color classes
-------------------
    - .text-primary
    - .text-secondary
    - .text-success
    - .text-danger
    - .text-info
    - .text-light
    - .text-dark
    - .text-white
    - .text-body
    - .text-muted
    - .text-black-50
    - .text-white-50

Text Formatting classes
---------------------------------
    Text align classes
    -------------------------
        - .text-left
        - .text-right
        - .text-center
        - .text-justify
    
    Text align classes with break points
    ------------------------------------------
        - .text-<breakpoint>-left
        - .text-<breakpoint>-right
        - .text-<breakpoint>-center
        - .text-justify
    
    Text transform classes
    -------------------------
        - .text-lowercase
        - .text-uppercase
        - .text-capitalize
    
    Font Weight classes
    --------------------------
        - .font-weight-bold
        - .font-weight-bolder
        - .font-weight-light
        - .font-weight-lighter
        - .font-weight-normal
        - .font-italic
    
    Anchor tag formatting classes
    -------------------------------------------
        - .text-decoration-none
        - .text-reset

    Wrapping & long text formatting classes
    --------------------------------------------------
        - .text-nowrap
        - .text-wrap
        - .text-truncate
        - .text-break

Text & list style classes
-------------------------------
    Font size classes
    -------------------------
        - .display-1
        - .display-2
        - .display-3
        - .display-4
        - .lead
    
    List style classes
    ----------------------
        - .list-unstyled
        - .list-inline
        - .list-inline-item

    BlockQuiotes classes
    ------------------------------------
        - .blockquote
        - .blockquote-footer
    
    User select clasess
    -----------------------------------
        - .user-select-none
        - .user-select-all
        - .user-select-auto

Button classes
--------------------------------   
    - .btn Mandatory

    - .btn-primary
    - .btn-secondary
    - .btn-success
    - .btn-danger
    - .btn-warning
    - .btn-info
    - .btn-light
    - .btn-dark
    - .btn-link

    outline-button classes
    -----------------------------
        - .btn-outline-primary
        - .btn-outline-secondary
        - .btn-outline-success
        - .btn-outline-danger
        - .btn-outline-warning
        - .btn-outline-info
        - .btn-outline-light
        - .btn-outline-dark
        - .btn-outline-link
    
    button sizes
    -------------------------
        - .btn-lg
        - .btn-sm
        - .btn-block
    
    Active & Disabled button
    -------------------------------
        - .active
        - .disabled

Button group classes
------------------------------
    - .btn-group
    - .btn-group-lg
    - .btn-group-sm
    - .btn-group-toggle
    - .btn-group-vertical

    Group button toolbar class
    --------------------------------
        - .btn-toolbar
    
    Group Nesting button classes
    ---------------------------------------
        - .dropdown-toggle and data-toggle = "dropdown"
    
List Group classes
----------------------------------
    - .list-group
    - .list-group-item
    - .list-group-flush
    - .list-group-horizontal
    - .list-group-item-action

    List group color classes
    ---------------------------------
        - .list-group-item-light
        - .list-group-item-primary
        - .list-group-item-secondary
        - .list-group-item-success
        - .list-group-item-danger
        - .list-group-item-warning
        - .list-group-item-info
        - .list-group-item-dark

Table classes
----------------------
    - .table
    - .table-dark
    - .table-borderless
    - .table-striped
    - .table-bordered
    - .table-hover
    - .table-responsive
    - .table-responsive-{sm|md|lg|xl}

    Table row color classes
    ------------------------------------
        - .table-light
        - .table-primary
        - .table-secondary
        - .table-success
        - .table-danger
        - .table-warning
        - .table-info
        - .table-dark


28
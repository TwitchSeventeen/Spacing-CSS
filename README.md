# Spacing-CSS
Spacing CSS is a CSS library for adding responsive margin / padding utility classes. It's sole purpose is to add space between elements.


## Usage
Include the spacing.css file in the <head> of your webpage.

``` html
<head>
    <link rel="stylesheet" href="/dist/spacing.min.css">
</head>
```

Then add classes to elements to create margins and padding.
``` html
<p class="mt">Top margin of 1rem</p>
<p class="pl-2x">Left padding of 2rem</p>
```

## Spacing classes
Each spacing class is created in the following format:
```
(property)(direction)-(mediaQuery)-(multiplier)
```
Only property is required, the rest can be omitted.

### Property
This specifies whether the spacing is margin or padding, it's the only required part of the spacing class.
```
m - margin
p - padding
```

### Direction
This specifies the direction for the space, if you omit this value then space will be applied to all sides.
```
t - top
r - right
b - bottom
l - left
h - horizontal
v - vertical
*blank* - all directions
```

### Media Query
This specifies the screen size the space should apply to. If you omit this value then the space will apply to all screen sizes.

These are the default media queries, the `/dist` directory also contains builds for popular libraries. Check the docs for these.
```
small - 320px -> 480px
medium - 481px -> 767px
large - 768px -> 1024px
xlarge - 1025px -> 1280px
xxlarge - 1281px and up
```

### Multiplier
By default 1rem of space is applied, this multiplier allows you to increase that amount. You can also use a multiplier of 0, which removes space. For margin you can also set a multiplier of a, which sets a margin of auto

```
0 - no space
a - auto space (margin only)
2x - space of 2rem
3x - space of 3rem
4x - space of 4rem
5x - space of 5rem
```

## Examples
``` html
.mt-small-2x <!-- margin-top: 2rem -->
.pb_3x <!-- padding-bottom: 3rem -->
.p-0 <!-- padding: 0 -->
.mh_a <!--  margin-right: auto; margin-left: auto -->
```

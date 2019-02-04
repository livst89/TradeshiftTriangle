# Assignment notes

1. [Problem to solve](#problem-to-solve)
  1. [Valid triangle?](#valid-triangle?)
  1. [Triangle types](#triangle-types)
1. [Thoughts on project structure](#thoughts-on-project-structure)
1. [Tradeshift UI](#tradeshift-ui)
1. [Further work](#further-work)
1. [Time spent estimate](#time-spent-estimate)

## Problem to solve

Determine triangle type by side lengths.


### Valid triangle?

Does the three lengths (input values) allow for a triangle?

Possible pitfall: Input data types and valid values. Can be handled by
restricting the input type and doing a values check before evaluating the
triangle type.

Input value requirements: Not 0 or less, and two shorter sides added together
must be greater than the longest side.

Converting input to floats in order to accommodate decimals.

Getting the form inputs are currently done individually for each input field. An
alternate way would be to get an array of them, possibly by using a JS
getAllElements function call or a query selector. For a larger form this would
be preferable.


### Triangle types

Types to check for: Equilateral, isosceles or scalene.

**Equilateral:** All sides are same length.

**Isosceles:** Two sides are same length.

**Scalene:** No congruent side lengths.

Can be done using fairly simple condition statements. By first having evaluated
whether the input values are valid, the following triangle type evaluation does
not need to account for this.

*Possible bonus:* Check for right, acute and obtuse triangle? Converse Pythagorean
Theorem. "If the square of the length of the longest side of a triangle is equal
to the sum of the squares of the lengths of the other two sides, then the
triangle is a right triangle."

c^2 < a^2 + b^2 = acute  
c^2 = a^2 + b^2 = right  
c^2 > a^2 + b^2 = obtuse


## Thoughts on project structure

**KISS:** Keep It Simple Stupid. Single page application in index.html, one JS file
for triangle type evaluation and a CSS file for some minor layout adjustments.
Tradeshift UI files are linked as externals.

**HTML:** Semantic elements (not too happy with the bunch of divs in the Tradeshift
UI boilerplate template, but oh well). Keep elements properly separated and
structured.

**JS file:** Separation of functionality with clearly named functions. I have aimed
to keep code duplication to a minimum.


## Tradeshift UI

http://ui.tradeshift.com/
https://github.com/Tradeshift/tradeshift-ui

- Fixed the links provided in the documentation to include `https:`.
- Not sure what the added app svg icon from the boilerplate template is for, or where to find it. Commenting it out for now.
- Tried to add an icon to the form `<button>`, but that turned out really weird. Seems like it somehow broke the sprite mapping.
- After looking at the Menu component examples, I tried adding a `<span>` element around the button text. Didn't help.
- Side note: When inserting the icon outside the form, it seems to work fine. But adds a duplicate icon element at the bottom of the surrounding panel? What?
- Using the `ts-multi` class on the `<fieldset>` element of the form seems to only accommodate a two column layout? Not much explanation of this class in the documentation, only seeing it in the gallery tab. Removing it as I don't find it aesthetically fitting with the three entry fields.
- Using the searchbar on the documentation page provides no results on the following queries: "panel", "size" or "width".
- Adding a bit of custom CSS to adjust padding.
- Wish there was a bit more documentation on Typography options... Colors, weights, styles...
- Would also love some documentation on utility classes for positioning, sizing, spacing, alignment...


## Further work

- Add error and info helpers to form input fields.
- Drawing the given triangle using `canvas` as an output!
  - Pain point: Scaling!
- Include checking if the triangle is right, acute or obtuse.


## Time spent estimate

~6-7 hours or so total, spread over a couple of evenings.

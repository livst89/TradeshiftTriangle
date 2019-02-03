# Assignment notes

## 1.0 Problem to solve

Determine triangle type by side lengths.

### 1.1: Valid triangle?

Does the three lengths allow for a triangle?

Requirements: Not 0 or less, and two shorter sides added together must be
greater than the longest side.

### 1.2: Triangle types

Types to check for: Equilateral, isosceles or scalene.

Equilateral: All sides are same length.

Isosceles: Two sides are same length.

Scalene: No congruent side lengths.


Possible bonus: Check for right, acute and obtuse triangle? Converse Pythagorean
Theorem. "If the square of the length of the longest side of a triangle is equal to the
sum of the squares of the lengths of the other two sides, then the triangle is
a right triangle."

c^2 < a^2 + b^2 = acute

c^2 = a^2 + b^2 = right

c^2 > a^2 + b^2 = obtuse



## 2.0 Thoughts on project structure

KISS: Keep It Simple Stupid. Single page application, one JS file for triangle
calculations.

HTML: Semantic elements.

JS file: Separation of functionality with clearly named functions.


## 3.0 Tradeshift UI

http://ui.tradeshift.com/
https://github.com/Tradeshift/tradeshift-ui

- Fixed the links provided in the documentation to include "https:".
- Not sure what the added app svg icon from the boilerplate template is for, or where to find it. Commenting it out for now.
- Tried to add an icon to the form <button>, but that turned out really weird. Seems like it somehow broke the sprite mapping.
- After looking at the Menu component examples, I tried adding a <span> element around the button text. Didn't help.
- Side note: When inserting the icon outside the form, it seems to work fine. But adds a duplicate icon element at the bottom of the surrounding panel? What?
- Using the "ts-multi" class on the <fieldset> element of the form seems to only accommodate a two column layout? Not much explanation of this class in the documentation, only seeing it in the gallery tab. Removing it as I don't find it aesthetically fitting with the three entry fields.
- Using the searchbar on the documentation page provides no results on the following queries: "panel", "size" or "width".
- Adding a bit of custom CSS to adjust padding.
- Wish there was a bit more documentation on Typography options... Colors, weights, styles...
- Would also love some documentation on utility classes for positioning, sizing, spacing, alignment...

## 4.0 Further work

- Add error and info helpers to form input fields.
- Drawing the given triangle using canvas as an output!


## 5.0 Time spent

~5-6 hours or so total, spread over a couple of evenings.

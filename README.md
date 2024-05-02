# Simple Star Rating

Do you want to display a star rating without any hassle? This is a straightforward solution that you can integrate in just a couple of clicks.

## Description

This plugin is designed to display a star rating that can be animated. It is lightweight and easy to integrate.
[Example](https://nikolasgrizli.github.io/simpleAnimatedStars/)

## Advantages

- Incredibly lightweight
- Very easy to integrate
- Additional mixin available for use in Pug
- Animation triggers when the element enters the viewport, but you can simply add the `is-showing` class in the mixin, and then you only need CSS + markup.

## Usage Example

### HTML

```html
<div class="stars is-showing" style="--ratingPercent: 86%">
  <div
    class="stars__body"
    itemprop="aggregateRating"
    itemscope="itemscope"
    itemtype="http://schema.org/AggregateRating"
  >
    <span class="onlyScreenReader" itemprop="ratingValue">4.3</span>
    <span class="onlyScreenReader" itemprop="reviewCount">1000</span>
  </div>
</div>
```

### PUG

```pug
+stars(4.5, 1000)
```

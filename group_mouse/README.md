## Instructions on how to interact with the work

 slide the mouse within the pattern

## Details of your individual approach to animating the group code

1. Which did you choose to drive your individual code: audio, interaction, Perlin noise or time.

  Use mouse and perlin noise

2. Which properties of the image will be animated and how; highlighting how it is unique from other group members (i.e. one changes colours, the other component sizes, another reveals only some components at a time, etc.). You will need to work with your group members to make sure your work is sufficiently different from each other.

   The size, color, and position of the pattern are used to create animation effects.

3. References to inspiration for animating your individual code; these can be images (still or gifs). How did they influence your submission?

   1. Interactive website: Apple's website often uses rich animation effects. When users scroll the page or move the mouse, the page elements will change dynamically. So I also plan to design a similar picture.
   2. Interactive art installation: Rafael Lozano-Hemmer's works often use complex sensor technology. When the audience approaches or touches the device, the work will change accordingly.
   3. Digital installation art: The digital art works of the artist team TeamLab create constantly changing dynamic pictures through the interaction of the audience.
   4. Dynamic visual effects: The Processing language created by artists Casey Reas and Ben Fry is widely used to generate interactive art works. Through interactive operations such as mouse movement, real-time changing visual effects are generated.


4. A short technical explanation of how your individual code works to animate the image and any appropriate references.

  1. First calculate hoverMargin = width / 6 and use isMouseOver() to get a range of action. The blocks in this range will trigger the animation.
2. Secondly, the size of the graphic changes according to the distance from the mouse coordinates, ranging from 1.2 to 1.8 times. When the graphic leaves the range of action, it returns to its original state.
3. Finally, use lerpColor and noise to smoothly change the color of the graphic in the range of action.
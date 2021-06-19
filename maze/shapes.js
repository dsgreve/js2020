const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const engine = Engine.create();
const width = 800;
const height = 600;
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width: width,
    height: height
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(world, MouseConstraint.create(engine, {
  mouse: Mouse.create(render.canvas)
}))

// Walls
const walls = [
  Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
  Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 50, 600, { isStatic: true })
];
World.add(world, walls)

// Random Shapes
for (let i = 0; i < 50; i++) {
  if (Math.random() > 0.5) {
    World.add(
      world, 
      Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50))
  } else {
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * height, 36, {
        render: {
          fillStyle: 'aqua'
        }
      })
    );
  }
}

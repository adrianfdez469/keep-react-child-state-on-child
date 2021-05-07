# keep-react-child-state-on-child

This is a React example project, to demonstrate my point on a blog post I publish.
Basically, I'm trying to show here three diffrent approach to work with a Parent-Child components relation, where the parent component needs to know at some point of time, the values of the internal state of the Child component.
In this example you will see:

| Solution                                  | Difficulty | Organization | Performance |
| ----------------------------------------- | ---------- | ------------ | ----------- |
| Solution 1: Elevating state to the parent | Low        | Low          | Medium      |
| Solution 2: Global State with Context-API | Medium     | Hight        | Medium      |
| Solution 3: Managing state on child       | Hight      | Medium       | Hight       |

This is a create-react-app so you can fork, and test your self.
Use yarn start or npm start to test it, or got to this app where is deployed:

https://adrianfdez469.github.io/keep-react-child-state-on-child/

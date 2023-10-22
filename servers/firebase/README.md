# Firebase 

Manage the photo gallery and register client photo frames on Firebase

## Approach

1. Authenticate a user
2. View and manage client photo frames
3. View and manage photo galleries
3. Support photo upload and manipulate images, including:
    * Resizing to the client format
    * Reducing the number of colors
    * Converting the photo to a format targetted for the client
4. Select which photos to deliver to the clients



## Considerations

### Modern Browers by trusted users 

The users' browser can handle most of the work, there's no need to have the server-side do much work. The users can be trusted to play nice.

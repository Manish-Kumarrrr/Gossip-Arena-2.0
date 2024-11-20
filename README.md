# Gossip Arena 2.0

**Gossip Arena 2.0** is a modern real-time messaging platform with both one-to-one and group chat functionality, user authentication via Google, and persistent message storage. It is built with Next.js for the frontend, Node.js for the backend, and uses Prisma ORM for seamless database management with MongoDB as the data store.

In future versions, this platform will also support audio and video calling for more engaging user interactions.

---

## Features

- **Real-Time Messaging**: Instant communication between users with support for both one-on-one and group chats.
- **Persistence**: All messages are stored in MongoDB, so they remain accessible even after the app is closed.
- **Authorization**: User authentication and authorization via Google OAuth for secure sign-in and account management.
- **Group Chat**: Users can create and join multiple chat groups, with support for managing group members and messages.
- **Future Features**: Audio and video call support for richer communication (coming soon).

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (React framework) for building the user interface and handling server-side rendering (SSR).
- **Backend**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/) for handling API requests and managing business logic.
- **Database**: [MongoDB](https://www.mongodb.com/), with [Prisma](https://www.prisma.io/) as the ORM, for easy database management and querying.
- **Authentication**: [Google OAuth](https://developers.google.com/identity/protocols/oauth2) for secure authentication and authorization.
- **Real-Time Communication**: [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) or [Socket.io](https://socket.io/) for real-time messaging.

---

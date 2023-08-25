## Week 10 Assignment Overview

For Week 10's Assignment, we are to build a RESTful APIs (NodeJS App) that implements several features:
- Hashed login data using **JWT**
- Authentication and Authorization using **JWT**
- **Swagger/ OpenAPI Spec** for API Documentation
- Limitation on Username and Password (such as: no duplicate username and alphanumeric password)
- Connection to MongoDB Database

For this particular project, I'm using:
- **Typescript** as the programming language
- **MongoDB Atlas** for the database service.
## API Endpoints
<p align="center">
<a href="https://week10sherin-prod.up.railway.app/">week10sherin-prod.up.railway.app/</a>
</p> 
<p align="center">
<a href="https://week10sherin-prod.up.railway.app/api-docs/">Swagger UI Documentation</a>
</p>

<div align="center">

| Name  | HTTP Method | Endpoint | Authentication | Authorization |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| **Homepage** | `GET` |[/](https://week10sherin-prod.up.railway.app/) | ❌ | ❌ |
| **List All Transfer Requests** | `GET` | [/api/transfers](https://week10sherin-prod.up.railway.app/api/transfers) | ✔ | ❌ |
| **Create New Transfer Request** | `POST` | [/api/transfers/new](https://week10sherin-prod.up.railway.app/api/transfers/new) | ✔ | ❌ |
| **Update Transfer Request Status** | `PATCH` | [/api/transfers/{_id}](https://week10sherin-prod.up.railway.app/api/transfers/64e69eecd9bfba9c379ce9af) | ✔ | ✔ |
| **List All User Data** | `GET` | [/api/users](https://week10sherin-prod.up.railway.app/api/users) | ✔ | ✔ |
| **Register New User** | `POST` | [/api/users/register](https://week10sherin-prod.up.railway.app/api/users/register) |  ❌ | ❌ |
| **Login User** | `POST` | [/api/users/login](https://week10sherin-prod.up.railway.app/api/users/login) | ❌ | ❌ |
</div>

### Contact Me:

<img src="https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/3dd7cdf0d5c9fc1828f0dfcac8ef2e9c057902be/assets/gmail-icon.svg" width="15px" background-color="none">[SOChronicle@gmail.com](mailto:SOChronicle@gmail.com) [Personal]

<img src="https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/3dd7cdf0d5c9fc1828f0dfcac8ef2e9c057902be/assets/gmail-icon.svg" width="15px" background-color="none">[SOlivia@gmail.com](mailto:SOlivia198@gmail.com) [Work]

[![Roo-Discord](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-discord.svg)](https://discord.com/users/shxdxr#7539)[![Roo-Instagram](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-instagram.svg)](https://instagram.com/shxdxr?igshid=MzRlODBiNWFlZA==)[![Roo-LinkedIn](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-linkedin-circled.svg)](https://www.linkedin.com/in/sherin-olivia-07311127a/)
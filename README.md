# StoryPoint for Asana - Manifest V3 Fork

This is a fork of [StoryPoint for Asana](https://chrome.google.com/webstore/detail/storypoint-for-asana/ipkcinfcdhhcmibffhlklololceffgnc) that has been migrated to support Chrome Extension Manifest V3.

[![chrome web store](https://img.shields.io/chrome-web-store/v/ipkcinfcdhhcmibffhlklololceffgnc.svg)](https://chrome.google.com/webstore/detail/storypoint-for-asana/ipkcinfcdhhcmibffhlklololceffgnc)
[![Donate to this project using Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/igtm)

This app tracks scrum story points super-easily on Asana boards.

![point](./docs/point.jpg)

# Features

- you can track story points
- you can check both "NotCompleted points" and "Completed points" summed up automatically in each column
- you can check both "NotCompleted points" and "Completed points" story points summed up automatically in a project
- you can sum up subtask story points in a task

# Supported Layouts

### Board Layout
![board](./docs/board.jpg)

### List Layout
![list](./docs/list.jpg)

# Manifest V3 Migration

This fork has been updated to use Chrome Extension Manifest V3, which is required for all Chrome extensions as of 2024. Key changes include:

- Updated manifest structure to V3 format
- Converted background script to service worker
- Updated permissions model to use host_permissions
- Removed deprecated APIs and features

# Known Issues

- Asana Board: tasks on each lists are lazy-loaded. so if you have more than almost 25 tasks in a list, summed up points may be wrong or under-calculated. so if you calculate total points correctly, just scroll each list!

# Todos

- [ ] dynamic story point range
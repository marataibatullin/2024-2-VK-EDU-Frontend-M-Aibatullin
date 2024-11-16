import { faker } from '@faker-js/faker';


export function generateChats(chatCount = 5) {
  return Array.from({ length: chatCount }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    lastSeen: faker.date.recent().toISOString(),
    messages: generateMessages(faker.number.int({ min: 3, max: 10 })),
  }));
}

function generateMessages(messageCount) {
  return Array.from({ length: messageCount }, () => ({
    text: faker.lorem.sentence(),
    images: generateImages(faker.number.int({ min: 0, max: 2 })),
    timestamp: faker.date.recent().toISOString(),
    fromUser: faker.datatype.boolean(),
    isRead: faker.datatype.boolean()
  }));
}

function generateImages(imageCount) {
    return Array.from({ length: imageCount }, () => faker.image.dataUri());
  }

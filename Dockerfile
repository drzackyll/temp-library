FROM node:12.2.0

# set working directory
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

RUN npm install --silent

EXPOSE 3000

CMD ["npm", "run", "storybook"]
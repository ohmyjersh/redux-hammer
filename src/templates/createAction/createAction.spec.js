import CreateAction from './CreateAction';

test('make the action object', () => {
  const type = 'type';
  const payload = 'payload';
  expect(CreateAction(type, payload)).toEqual({ type: type, payload: payload });
});

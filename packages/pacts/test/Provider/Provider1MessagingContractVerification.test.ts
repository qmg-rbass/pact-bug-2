import { MessageProviderPact } from '@pact-foundation/pact';

jest.setTimeout(90_000)

describe('provider1-messaging contract verification tests', () => {
  const pact = new MessageProviderPact({
    messageProviders: {
      'foo message': async () => ({ type: 'foo' }),
    },
    provider: 'provider1-messaging',
    providerVersion: '1.0.0',
    pactUrls: [
      `${process.cwd()}/consumer1-messaging-provider1-messaging.json`,
    ],
    publishVerificationResult: false,
    logLevel: 'warn',
  });

  // eslint-disable-next-line jest/expect-expect
  it('provides all messages expected by consumers', async () => {
    await pact.verify();
  });
});

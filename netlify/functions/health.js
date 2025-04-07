// Netlify serverless function for health check
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'ok' })
  };
}; 
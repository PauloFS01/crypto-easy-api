const environment = process.env.NODE_ENV || 'development';
module.exports = () => {
    return app = {
        isProduction: environment === 'production',
        db: process.env.DB || 'mongodb://localhost:27017'        
    }
}

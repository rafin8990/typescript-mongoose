import mongoose from 'mongoose';
import app from './app';

const port =process.env.PORT || 5000

bootstrap().catch(err => console.log(err));
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log(` Database Connection successful`);
    }
    catch (error) { ` Failed to connect database ` }
}
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
});
bootstrap();
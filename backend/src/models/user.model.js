import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true,
        },
        email:{
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim:true,
        },
        password:{
            type: String,
            select: false,
            required: true,
            minlength: 6
        }, 
    },
    {timestamps: true} 
);

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,12);
    next();
});

userSchema.methods.comparePassword = async function(candidatePassword){
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
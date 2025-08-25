import { model, Schema } from "mongoose";


const userSchema = new Schema<IUser>({
    name: {type: String, required: true, trim: true, min: 3, max: 255},
    email: {type: String,
        validate: {
        validator: function(v) {
            return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(v);
        },
        message: props => `${props.value} is not a valid email!`
        },
        required: [true, 'User Email required'],
        immutable: true,
        unique: true
    },
    phone: {type: String, required: [true, "Phone number required"], unique: true},
    password: {type: String, required: true},
    role: {
        type: String,
        enum: {
            values: ["Admin", "Customer"],
            message: `{VALUE} not supported`
        },

        default: "Customer"
    },
});

const User =  model<IUser>("user", userSchema);

export default User;
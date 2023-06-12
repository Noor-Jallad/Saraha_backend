import bcrypt from 'bcryptjs';

export const hash=(plainText,salt_round=parseInt(process.env.SALTROUND))=>{
const hash=bcrypt.hashSync(plainText,salt_round);
return hash;
}

export const compare=(plainText,hashPassword)=>{
const match=bcrypt.compareSync(plainText,hashPassword);
return match;
}
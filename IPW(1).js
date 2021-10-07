const a = [1,2,3,4];
const b = ['a',true,null,3,"abc",[0,1,2]];

console.log(a[1]);
console.log(b[4]);

const p = {
	a: 23,
	b: 54,
	c:  "xyz"
};

console.log(p.b);
console.log(p.c);

console.log(p['b']);
console.log(p['c']);

console.log('lenght'  + b.lenght)
console.log(b);

b[14] = 8;

console.log('-------')
for(const v in b) {
	console.log(v," : ",b[v]);
}




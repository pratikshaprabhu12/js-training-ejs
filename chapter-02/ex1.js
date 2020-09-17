/*
print the below pattern
#
##
###
####
#####
######
#######

*/ 

let num = 7, i, hash = "#";
for (i = 1; i <= num; i++) {
  console.log(hash);
  hash += "#";

}
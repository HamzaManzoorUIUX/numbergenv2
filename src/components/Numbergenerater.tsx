import { Box, Button, Checkbox, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Numbergenerater = () => {
  const [ResultRed, setResultRed] = useState(0);
  const generateArrays = () => {
    const data: number[][] = [[], [], [], [], [], [], []];
    for (let i = 0; i < 100; i++) {
      const newData = i.toString(2).split("").reverse().join("");
      for (let j = 0; j < 7; j++) {
        if (newData.charAt(j) === "1") {
          data[j].push(i);
        }
      }
    }
    return data;
  };
  //  console.log("generateArrays()",generateArrays());
  const systemSubmit = (e: any) => {
    e.preventDefault();
    let newVal=""
    for(let i=0;i<7;i++){
      if(e.target["checkbox"+i].checked){
        newVal+="1"
      }else{
        newVal+="0"
      }
    }
    setResultRed(parseInt(newVal,2))
    
  };
  return (
    <form onSubmit={systemSubmit}>
      <Flex
        justifyContent={"center"}
        w={"100%"}
        flexWrap={"wrap"}
        alignItems={"flex-start"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        {generateArrays()
          .reverse()
          .map((obj: number[], i: number) => {
            return (
              <Checkbox
                key={`${i}${i}`}
                name={"checkbox"+i}
                minW={200}
                maxW={250}
                flex={1}
                spacing={1}
                mb={10}
                display={"flex"}
                flexDirection={"column-reverse"}
              >
                <Flex
                  flexWrap={"wrap"}
                  bg={"Black"}
                  minHeight={350}
                  color={"white"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  {obj
                    .sort(function (a, b) {
                      return a - b;
                    })
                    .map((x: number) => (
                      <Box p={4} key={x}>
                        {x}
                      </Box>
                    ))}
                </Flex>
              </Checkbox>
            );
          })}
      </Flex>
      <Button
        colorScheme="blue"
        type="submit"
        mx={"auto"}
        display={"flex"}
        p={"10px 15px"}
        borderRadius={8}
        background={"black"}
        textColor={"white"}
      >
        Generate
      </Button>
      <Box mx={"auto"} mt={10} border={"1px solid black"} width={250} height={50} display={"flex"} alignItems={"center"} justifyContent={"center"} fontSize={35} borderRadius={10} >{ResultRed}</Box>
    </form>
  );
};

export default Numbergenerater;

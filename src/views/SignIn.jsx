import { Box, Button, Card, Heading, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    return (
        <>
            <Box  
                backgroundImage={
                    "https://cdn.openai.com/labs/images/A%20Formula%201%20car%20driving%20on%20a%20neon%20road.webp?v=1"
                }
                backgroundSize="cover"
                backgroundPosition="center"
                display="flex"
                w={"100%"}
                h={"700"}
                justifyContent="center"
                alignItems="center"
                >
                    <Card bg="#ffffff" p={7} borderRadius={"30px"} boxShadow={"2xl"}  >
                        <Heading
                            bgGradient='linear(to-r, purple.500,blue.300, pink.300)'
                            bgClip='text'
                            fontSize='6xl'
                            fontWeight='extrabold'
                        >
                            Inciar Sesión
                        </Heading>
                        <VStack>
                            <Input placeholder="Usuario" borderBottomWidth={2}></Input>
                            <Input placeholder="Contraseña" borderBottomWidth={2}></Input>
                            <Button bg="#450068" color={"#ffffff"} borderRadius={"10px"} onClick={() => navigate("/")}>
                                Iniciar sesión
                            </Button>
                        </VStack>
                        <Button variant={"link"} onClick={() => navigate("/signup")}>
                            ¿Aún no tienes una cuenta? Regístrate
                        </Button>
                    </Card>
            </Box>
        </>

    );
}

export default SignIn;
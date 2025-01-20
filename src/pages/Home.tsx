import {
  FunctionComponent, ReactElement,
} from 'react'
import {
  Text, Button, Box, Tooltip, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
} from '@chakra-ui/react'
import { useDevApi } from '@/api/useDevApi'
import { useQuery } from '@tanstack/react-query'

export const Home: FunctionComponent = (): ReactElement => {
  const {
    isOpen, onOpen, onClose,
  } = useDisclosure()

  const {
    data, isLoading, error,
  } = useQuery({
    queryKey: ['dev'],
    queryFn: () => useDevApi.checkIp(),
  })
  return (
    <Box>
      <Tooltip
        label="This will open a modal"
        placement="top"
      >
        <Button onClick={onOpen}>Click this button</Button>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Example Modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              {data?.ip}
              Here&apos;s a Chakra UI modal. You can close it by
              clicking &quot;Close&quot;
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}


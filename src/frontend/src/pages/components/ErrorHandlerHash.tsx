import { BoxProps, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import * as React from 'react'
import { useEffect, useState } from 'react';
import { useStore } from '../../stores/wallet';
import { ErrorHashHandler } from '../../utils/errorHandlers';

const ErrorHandlerHash = (props: BoxProps) => {
  const router = useRouter();
  const toast = useToast();
  const id = router.query && router.query.id ? router.query.id : "";
  const transactionHashes = router.query.transactionHashes;
  const { wallet, setWallet } = useStore();
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const [txSuccess, setTxSuccess] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      ErrorHashHandler(router, toast, wallet);

      setIsLoaded(true);
    })();
  }, [transactionHashes, wallet, toast]);

  return (<></>)}

export default ErrorHandlerHash;
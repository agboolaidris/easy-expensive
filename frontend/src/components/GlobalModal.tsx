import React from 'react';
import { ModalTypes, useActiveModal, useOpenModal } from 'src/store/modalStore';

import { LoginModal } from './module/login-modal';

const Modals = [
  {
    component: LoginModal,
    value: ModalTypes.LOGIN_MODAL,
  },
];

export const GlobalModals = () => {
  const activeModal = useActiveModal();
  const closeModal = useOpenModal();
  return (
    <>
      {Modals.map(({ value, component: Component }) => {
        return (
          <Component
            isOpen={activeModal?.modal === value}
            key={value}
            onClose={() =>
              closeModal({ modal: '' as ModalTypes, modalProps: {} })
            }
            {...(activeModal?.modalProps as any)}
          />
        );
      })}
    </>
  );
};

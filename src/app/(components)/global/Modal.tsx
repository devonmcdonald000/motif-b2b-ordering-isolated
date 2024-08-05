import { useId, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SfModal, SfButton, SfIconClose, useDisclosure } from '@storefront-ui/react';

export default function ModalTransition({ close, isOpen, children } : { close: () => void, isOpen: boolean, children: React.ReactNode }) {
  const headingId = useId();
  const descriptionId = useId();
  const modalRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Backdrop */}
      <CSSTransition
        in={isOpen}
        nodeRef={backdropRef}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: 'opacity-0',
          enterDone: 'opacity-100 transition duration-200 ease-out',
          exitActive: 'opacity-0 transition duration-200 ease-out',
        }}
      >
        <div ref={backdropRef} className="fixed inset-0 bg-neutral-700 bg-opacity-50 z-40" onClick={close} />
      </CSSTransition>

      {/* Modal */}
      <CSSTransition
        in={isOpen}
        nodeRef={modalRef}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: 'translate-y-10 opacity-0',
          enterDone: 'translate-y-0 opacity-100 transition duration-200 ease-out',
          exitActive: 'translate-y-10 opacity-0 transition duration-200 ease-out',
        }}
      >
        <SfModal
          open
          className='z-50 rounded-md p-10'
          ref={modalRef}
          as="section"
          role="alertdialog"
          aria-labelledby={headingId}
          aria-describedby={descriptionId}
        >
          { children }
        </SfModal>
      </CSSTransition>
    </>
  );
}
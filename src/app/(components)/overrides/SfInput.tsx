'use client';
import classNames from 'classnames';
import { SfInputSize, useFocusVisible, type SfInputProps, polymorphicForwardRef } from '@storefront-ui/react';

const defaultWrapperTag = 'span';

const sizeClasses = {
  [SfInputSize.sm]: ' h-[32px]',
  [SfInputSize.base]: 'h-[40px]',
  [SfInputSize.lg]: 'h-[48px]',
};

const SfInput = polymorphicForwardRef<typeof defaultWrapperTag, SfInputProps>(
  (
    { wrapperAs, size = SfInputSize.base, slotPrefix, slotSuffix, invalid, className, wrapperClassName, ...attributes },
    ref,
  ) => {
    const WrapperTag = wrapperAs || defaultWrapperTag;

    return (
      <WrapperTag
        className={classNames([
          'flex items-center gap-2 bg-white rounded-md border w-full px-3 border-secondary-200 h-[40px] focus-visible:outline-none text-secondary-200',
          sizeClasses[size],
          wrapperClassName,
        ])}
        data-testid="input"
      >
        {slotPrefix}
        <input
          className={classNames([
            'min-w-[40px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent',
            className,
          ])}
          type="text"
          data-testid="input-field"
          size={1}
          ref={ref}
          {...attributes}
        />
        {slotSuffix}
      </WrapperTag>
    );
  },
);

export default SfInput;
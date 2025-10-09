import { expect } from 'chai';
// eslint-disable-next-line import/no-extraneous-dependencies
import sinon from 'sinon';
import copyToClipboard from './copyToClipboard';

describe('copyToClipboard', () => {
  let clipboardWriteTextStub: sinon.SinonStub;
  let execCommandStub: sinon.SinonStub;

  beforeEach(() => {
    clipboardWriteTextStub = sinon.stub(navigator.clipboard, 'writeText');
    execCommandStub = sinon.stub(document, 'execCommand');
  });

  afterEach(() => {
    clipboardWriteTextStub.restore();
    execCommandStub.restore();
  });

  it('应使用异步剪贴板 API 复制文本', async () => {
    clipboardWriteTextStub.resolves();

    const result = await copyToClipboard('测试文本');

    expect(result).to.be.true;
    expect(clipboardWriteTextStub.calledOnceWith('测试文本')).to.be.true;
  });

  it('在异步剪贴板 API 失败时应回退到 execCommand', async () => {
    clipboardWriteTextStub.rejects(new DOMException('Document is not focused', 'NotAllowedError'));
    execCommandStub.returns(true);

    const result = await copyToClipboard('测试文本');

    expect(result).to.be.true;
    expect(clipboardWriteTextStub.calledOnceWith('测试文本')).to.be.true;
    expect(execCommandStub.calledOnceWith('copy')).to.be.true;
  });

  it('在异步和同步方法均失败时应失败', async () => {
    clipboardWriteTextStub.rejects(new Error('异步剪贴板 API 失败'));
    execCommandStub.returns(false);

    const result = await copyToClipboard('测试文本');

    expect(result).to.be.false;
    expect(clipboardWriteTextStub.calledOnceWith('测试文本')).to.be.true;
    expect(execCommandStub.calledOnceWith('copy')).to.be.true;
  });

  it('当 execCommand 返回 false 时应记录警告并失败', async () => {
    clipboardWriteTextStub.rejects(new DOMException('Document is not focused', 'NotAllowedError'));
    execCommandStub.returns(false);

    const consoleWarnStub = sinon.stub(console, 'warn');

    const result = await copyToClipboard('测试文本');

    expect(result).to.be.false;
    expect(consoleWarnStub.calledWith('同步方法复制失败')).to.be.true;

    consoleWarnStub.restore();
  });

  it('当 execCommand 抛出错误时应记录错误并失败', async () => {
    clipboardWriteTextStub.rejects(new DOMException('Document is not focused', 'NotAllowedError'));
    execCommandStub.throws(new Error('execCommand 失败'));

    const consoleErrorStub = sinon.stub(console, 'error');

    const result = await copyToClipboard('测试文本');

    expect(result).to.be.false;
    expect(consoleErrorStub.calledWith('同步方法复制到剪贴板时发生错误:', sinon.match.instanceOf(Error))).to.be.true;

    consoleErrorStub.restore();
  });
});

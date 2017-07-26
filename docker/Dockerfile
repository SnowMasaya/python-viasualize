#################################################################################################################
# Base Images
#################################################################################################################
FROM ubuntu:14.04

#################################################################################################################
#           ENV Setting
#################################################################################################################
ENV CONDA_DIR /opt/conda
ENV PATH $CONDA_DIR/bin:$PATH

#################################################################################################################
#           Initial Setting
#################################################################################################################
RUN mkdir -p $CONDA_DIR && \
    echo export PATH=$CONDA_DIR/bin:'$PATH' > /etc/profile.d/conda.sh && \
    apt-get update && \
    apt-get install -y wget git libhdf5-dev g++ graphviz && \
    wget --quiet https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh && \
    /bin/bash /Miniconda3-latest-Linux-x86_64.sh -f -b -p $CONDA_DIR && \
    rm Miniconda3-latest-Linux-x86_64.sh
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

#################################################################################################################
#           Mongo DB
#################################################################################################################
# Install MongoDB.
RUN \
  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 && \
  echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' > /etc/apt/sources.list.d/mongodb.list && \
  apt-get update && \
  apt-get install -y mongodb-org && \
  rm -rf /var/lib/apt/lists/*

# Define mountable directories.
VOLUME ["/data/db"]

#################################################################################################################
#           User Setting
#################################################################################################################
ENV NB_USER data_vis
ENV NB_UID 1000

RUN useradd -m -s /bin/bash -N -u $NB_UID $NB_USER && \
    mkdir -p $CONDA_DIR && \
    chown data_vis $CONDA_DIR -R && \
    mkdir -p /src && \
    chown data_vis /src

#################################################################################################################
#           Python Setting
#################################################################################################################
# Python
ARG python_version=3.4.0
ARG python_qt_version=4
RUN conda install -y python=${python_version} && \
    pip install numpy six prettytensor && \
    pip install dataset ipdb pytest pytest-cov python-coveralls coverage==3.7.1 pytest-xdist pep8 pytest-pep8 pydot_ng && \
    conda install Pillow scikit-learn notebook pandas matplotlib seaborn pyyaml h5py && \
    conda install -y pyqt=${python_qt_version} && \
    conda clean -yt

RUN conda install -y --channel https://conda.anaconda.org/menpo opencv3 && \
    conda clean -yt

ENV PYTHONPATH='/src/:$PYTHONPATH'

#################################################################################################################
#           Data viasualiza code
#################################################################################################################
RUN cd /src && git clone https://github.com/Kyrand/dataviz-with-python-and-js
RUN apt-get update && apt-get install -y firefox libxml2 libxml2-dev libxslt1-dev
RUN echo 'deb http://archive.ubuntu.com/ubuntu vivid main restricted universe' >> /etc/apt/sources.list && \
    apt-get update && apt-get install -y libffi-dev && \
    apt-get update && apt-get install -y build-essential libssl-dev
ADD requirements.txt /src/
RUN pip install -r /src/requirements.txt

#################################################################################################################
#           WORK Jupyter
#################################################################################################################
ADD python_javascript /src/python_javascript/
WORKDIR /src

EXPOSE 8888

USER data_vis

CMD jupyter notebook --port=8888 --ip=0.0.0.0